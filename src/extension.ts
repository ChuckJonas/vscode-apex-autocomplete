'use strict';

import * as vscode from 'vscode';

import {ApexCompletionItemProvider} from './lib/apexCompletionProvider';

export function activate(context: vscode.ExtensionContext) {
    vscode.languages.registerCompletionItemProvider(
            'apex',
            new ApexCompletionItemProvider(
                    context.asAbsolutePath('bin/tooling-force.jar'),
                    context.asAbsolutePath('bin/response.json'),
                    context.asAbsolutePath('bin')
                )
                ,'.', '@'
            );
}

// this method is called when your extension is deactivated
export function deactivate() {
}