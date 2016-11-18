'use strict';

import * as vscode from 'vscode';
import {ApexCompletionItemProvider} from './lib/apexCompletionProvider';
import {VfCompletionItemProvider} from './lib/vfCompletionProvider';

export function activate(context: vscode.ExtensionContext) {
    vscode.languages.registerCompletionItemProvider(
        'apex',
        new ApexCompletionItemProvider(
                context.asAbsolutePath('bin/tooling-force.jar'),
                context.asAbsolutePath('bin/response.json'),
                context.asAbsolutePath('bin')
            ),
        '.', '@'
    );

    vscode.languages.registerCompletionItemProvider(
        'visualforce',
        new VfCompletionItemProvider(),
        '<',
    );
}

// this method is called when your extension is deactivated
export function deactivate() {}