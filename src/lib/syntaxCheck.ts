import * as vscode from 'vscode';
import {ApexToolingService} from './apexToolingService';

export class ApexSyntax{

    private toolingService : ApexToolingService;
    private collection : vscode.DiagnosticCollection;

	public constructor(toolingService: ApexToolingService, collection: vscode.DiagnosticCollection){
		this.toolingService = toolingService;
        this.collection = collection;
	}

    public checkSyntax(document: vscode.TextDocument, collection: vscode.DiagnosticCollection){
        return this.toolingService.checkSyntax(document)
		.then((data: string) => {
            console.log(data);
            let cleanData = data.replace('RESULT=SUCCESS','');
            let parts = cleanData.split('\n');
            let problems = new Array<vscode.Diagnostic>();

            for(let i = 0; i < parts.length; i++){
                try{
                    let line = parts[i]
                    if(line.startsWith('ERROR:')){
                        let obj = JSON.parse(line.replace('ERROR:',''));
                        let problem = new vscode.Diagnostic(
                        new vscode.Range(new vscode.Position(obj.line-1,obj.column),new vscode.Position(obj.line-1,100)),
                        obj.text,
                        vscode.DiagnosticSeverity.Warning);

                        problems.push(problem);
                    }

                }catch(e){
                    console.log(e);
                }
            }
            collection.set(document.uri, problems);
		});

    }
}