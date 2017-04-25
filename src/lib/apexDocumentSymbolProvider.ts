import * as vscode from 'vscode';

import {ExtractSymbols, SymbolReader} from 'apex-parser-ts'

export class ApexDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

	/**
		 * Provide symbol information for the given document.
		 *
		 * @param document The document in which the command was invoked.
		 * @param token A cancellation token.
		 * @return An array of document highlights or a thenable that resolves to such. The lack of a result can be
		 * signaled by returning `undefined`, `null`, or an empty array.
		 */
    public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Thenable<vscode.SymbolInformation[]>{
        return new Promise((resolve, resject) => {
            let symbolExtractor = new ExtractSymbols();
            let readSymbols = symbolExtractor.findSymbolsFromString(document.getText());

            let symbols = [];
            readSymbols.symbolTable.symbols.forEach(sym => {
                let symbolKind: vscode.SymbolKind;
                switch(sym.symbolType){
                    case 'constructor':
                        symbolKind = vscode.SymbolKind.Constructor;
                        break;
                    case 'method':
                        symbolKind = vscode.SymbolKind.Method;
                        break;
                    case 'field':
                        symbolKind = vscode.SymbolKind.Field;
                        break;
                    case 'class':
                        symbolKind = vscode.SymbolKind.Class;
                        break;
                    default:
                        symbolKind = vscode.SymbolKind.Null;
                }
                let symbol = new vscode.SymbolInformation(sym.name.toString(), symbolKind, null, new vscode.Location(document.uri, new vscode.Position(sym.source.start.line-1, sym.source.start.charPositionInLine)));
                symbols.push(symbol);
                resolve(symbols);
            });
        });
    }

}