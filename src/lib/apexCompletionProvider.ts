import * as vscode from 'vscode';
import * as ChildProcess from 'child_process';
import * as fs from 'fs';

export class ApexCompletionItemProvider implements vscode.CompletionItemProvider{
	private jarPath: string;
	private responseFile: string;
	private tempFolder: string;

	public constructor(jarPath: string, responseFile: string, tempFolder: string){
		this.jarPath = jarPath;
		this.responseFile = responseFile;
		this.tempFolder = tempFolder;
	}

	/**
	 * Provide completion items for the given position and document.
	 *
	 * @param document The document in which the command was invoked.
	 * @param position The position at which the command was invoked.
	 * @param token A cancellation token.
	 * @return An array of completions, a [completion list](#CompletionList), or a thenable that resolves to either.
	 * The lack of a result can be signaled by returning `undefined`, `null`, or an empty array.
	 */
	public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]>{
		let path = document.fileName;
		let workspace = vscode.workspace.rootPath;
		let tempFile = this.tempFolder + '/tmp.cls';
		let respFile = this.responseFile;
		let cmd = `java -jar ${this.jarPath} --action=listCompletions --projectPath='${workspace}' --currentFilePath='${path}' --currentFileContentPath='${tempFile}'  --line=${position.line+1} --column=${position.character+1} --responseFilePath='${this.responseFile}'`;

		return new Promise(
			(resolve, reject)=>{
				fs.writeFile(tempFile, document.getText(), function(err) {
					if (err){
						vscode.window.showErrorMessage('Could not write to temp dir: ' + err);
						reject(err);
					}
					else resolve();
				});
		})
		.then(() => {
			return new Promise((resolve, reject) => {
				ChildProcess.exec(cmd, (error, stdout, stderr)=>{
					if (error){
						vscode.window.showErrorMessage('Could not run jar');
						reject(stderr);
					}
					resolve();
				});
			});
		}).then(() => {
			return new Promise((resolve, reject) => {
				fs.readFile(respFile, 'utf8', (err, data) => {
					if (err){
						vscode.window.showErrorMessage('Could not read results: ' + err);
						reject(err);
					}
					console.log(data);
					let cleanData = data.replace('RESULT=SUCCESS\n','');
					let parts = cleanData.split('\n');
					let completions = new Array<vscode.CompletionItem>();
					for(let i = 0; i < parts.length; i++){
						try{
							let obj = JSON.parse(parts[i]) as CompletionResult;
							let completion = this.createCompletion(obj);
							completions.push(completion);
						}catch(e){
							console.log(e);
						}
					}
					resolve(completions);
				});
			});
		});

	}

	private createCompletion(obj: CompletionResult): vscode.CompletionItem{
		let kind: vscode.CompletionItemKind;
		let label: string;
		let insertText:string;
		let documentation:string;

		if(obj.type=='Annotation'){
			label = obj.identity;
			insertText = obj.identity;
			kind = vscode.CompletionItemKind.Value;
			documentation = obj.doc;
		}else{ //method or prop
			documentation = obj.signature;

			const extractFuncRegex = /\b[^()]+(\(.*\))$/g;
			let funcMatch = extractFuncRegex.exec(obj.signature);
			let params: string;
			if(funcMatch !== null){ //is method
				params = funcMatch[1].trim();
			}

			if(params){
				label = `${obj.identity}${params}: ${obj.type}`;
				insertText = `${obj.identity}${params}`;
				if(obj.visibility == 'public' || obj.visibility == 'global'){
					kind = vscode.CompletionItemKind.Method;
				}else{
					kind = vscode.CompletionItemKind.Function;
				}
			}else{
				label = `${obj.identity}: ${obj.type}`;
				insertText = obj.identity;
				if(obj.visibility == 'public' || obj.visibility == 'global'){
					kind = vscode.CompletionItemKind.Property;
				}else{
					kind = vscode.CompletionItemKind.Field;
				}
			}
		}

		let completion = new vscode.CompletionItem(label, kind);
		completion.insertText = insertText;
		completion.documentation = documentation;

		return completion;
	}

}

class CompletionResult{
	public identity: string;
	public signature: string;
	public doc: string;
	public visibility: string;
	public type: string;
}