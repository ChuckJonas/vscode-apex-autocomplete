import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as net from 'net';
import * as child_process from 'child_process';

export class ApexCompletionItemProvider implements vscode.CompletionItemProvider{
	private jarPath: string;
	private responseFile: string;
	private tempFolder: string;
	private userName: string;
	private password: string;
	private instanceUrl: string;

	public constructor(jarPath: string, responseFile: string, tempFolder: string){
		this.jarPath = jarPath;
		this.responseFile = responseFile;
		this.tempFolder = tempFolder;

		let config = vscode.workspace.getConfiguration('apexAutoComplete');
		this.userName = config.get('userName') as string;
		this.password = config.get('password') as string;
		this.instanceUrl = config.get('instanceUrl') as string;

		this.runServer();
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

		let currentFile = document.fileName;
		let workspace = vscode.workspace.rootPath;
		let tempFile = path.join(this.tempFolder, 'tmp.cls');
		let respFile = this.responseFile;

		return new Promise(
			(resolve, reject)=>{
				fs.writeFile(tempFile, document.getText(), function(err) {
					if (err){
						reject(err);
					}
					else resolve();
				});
		})
		.then(() => {
			return new Promise((resolve, reject) => {
				let client = new net.Socket();
				client.once('data',(data) => {
  					console.log(data.toString());
					client.destroy();
					resolve();
				});

				client.connect(65000, '127.0.0.1',() => {
					let cmd = `--action=listCompletions --currentFilePath='${currentFile}' --currentFileContentPath='${tempFile}'  --line=${position.line+1} --column=${position.character+1} --responseFilePath='${this.responseFile}' --projectPath='${workspace}' --pollWaitMillis=1000 --maxPollRequests=1000`;
					if(this.userName && this.password && this.instanceUrl){
						cmd += ` --sf.username=${this.userName} --sf.password=${this.password} --sf.serverurl=${this.instanceUrl}`
					}
					cmd +='\n';
					console.log(cmd);
					client.write(cmd);
				});

				client.on('error', (err: any) => {
					if(err.code == 'ECONNREFUSED'){
						//if we get this error, try to kick off server again
						this.runServer();
					}else{
						console.log("Error: " + err.message);
					}
				});
			});
		}).then(() => {
			return new Promise((resolve, reject) => {
				fs.readFile(respFile, 'utf8', (err, data) => {
					if (err){
						reject(err);
					}
					console.log(data);
					let cleanData = data.replace('RESULT=SUCCESS','');
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

	//starts the completion server.  Server will only run once for all projects
	private runServer(){
		let cmd = `java -Dfile.encoding=UTF-8  -jar ${this.jarPath} --action=serverStart --port=65000 --timeoutSec=1800`;

    	let child = child_process.exec(cmd);
		child.stderr.on('data', function(data) {
			console.log('stdout: ' + data);
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
		}else if(!obj.signature.startsWith('private') && !obj.signature.startsWith('public') && !obj.signature.startsWith('global') && !obj.signature.startsWith('protected') && !obj.signature.startsWith('static')){
			label = obj.identity;
			insertText = obj.identity;
			kind = vscode.CompletionItemKind.Field;
			documentation = `${obj.signature}: ${obj.doc}`;
		}else{ //method or prop
			obj.signature = obj.signature.replace('( ', '(');
			if(obj.doc){
				documentation = obj.doc;
			}else{
				documentation = obj.signature;
			}

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