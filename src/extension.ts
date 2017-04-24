'use strict';

import * as vscode from 'vscode';
import {ApexToolingService} from './lib/apexToolingService';
import {ApexCompletionItemProvider} from './lib/apexCompletionProvider';
import {VfCompletionItemProvider} from './lib/vfCompletionProvider';
import {ApexDefinitionProvider} from './lib/apexDefinitionProvider';
import {ApexDocumentSymbolProvider} from './lib/apexDocumentSymbolProvider';
import {ApexSyntax} from './lib/syntaxCheck';

export function activate(context: vscode.ExtensionContext) {

    const outputChannel = vscode.window.createOutputChannel('Apex Autocomplete +');
    let toolingService = new ApexToolingService(context, outputChannel);
    toolingService.startService();

    //setup commands
    context.subscriptions.push(
         vscode.commands.registerCommand('apex-autocomplete.showOutput', () => {
            outputChannel.show();
        })
    );

    vscode.languages.registerCompletionItemProvider(
        'apex',
        new ApexCompletionItemProvider(toolingService),
        '.', '@'
    );

    vscode.languages.registerCompletionItemProvider(
        'visualforce',
        new VfCompletionItemProvider(),
        '<',
    );

    vscode.languages.registerDefinitionProvider(
        'apex',
        new ApexDefinitionProvider(toolingService)
    );

    vscode.languages.registerDocumentSymbolProvider(
        'apex',
        new ApexDocumentSymbolProvider()
    );

    //Setup Check Syntax
    let config = vscode.workspace.getConfiguration('apexAutoComplete');
    if(config.get('checkSyntax') as boolean){
        const collection = vscode.languages.createDiagnosticCollection('apex-syntax');
        let delay = config.get('checkSyntaxDelay') as number;
        let syntax = new ApexSyntax(toolingService, collection, delay);
        //register onchange
        vscode.workspace.onDidChangeTextDocument((changeEvent) => {
            if(changeEvent.document.languageId == 'apex'){
                syntax.checkSyntax(changeEvent.document, collection);
                return undefined;
            }
        });

        //cleanup on close
        vscode.workspace.onDidCloseTextDocument((textDocument) => {
            collection.delete(textDocument.uri);
        });
    }

}

// this method is called when your extension is deactivated
export function deactivate() {}