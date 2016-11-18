import * as vscode from 'vscode';
import * as fs from 'fs';
import * as net from 'net';
import * as child_process from 'child_process';

import * as vf from './visualForce';

export class VfCompletionItemProvider implements vscode.CompletionItemProvider{

	public constructor(){}

	/**
	 * Provide completion items for the given position and document.
	 *
	 * @param document The document in which the command was invoked.
	 * @param position The position at which the command was invoked.
	 * @param token A cancellation token.
	 * @return An array of completions, a [completion list](#CompletionList), or a thenable that resolves to either.
	 * The lack of a result can be signaled by returning `undefined`, `null`, or an empty array.
	 */
	public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[]{
        console.log(vf.definition);

		let completions = new Array<vscode.CompletionItem>();

		let i = position.line;

		let lastOpen = -1;
		while(lastOpen == -1 ){
			if(i<0){
				break;
			}

			let line = document.lineAt(i).text;

			if(position.line == i){ //only look before cursor
				line = line.substr(0, position.character);
			}

			lastOpen = line.lastIndexOf('<');
			let lastClose = line.lastIndexOf('>');
			let isOutside = false;
			if(line.charAt(lastClose-1) == '/'){
				isOutside = true;
			}

			let lastTagApex = line.lastIndexOf('<apex:');

			if(lastOpen != -1 && lastOpen > lastClose){ // we are in a tag
				if(lastTagApex == lastOpen){ //we are in a apex: tag
					//load tags
					let lastTag = line.substr(lastTagApex, line.length);
					if(lastTag.indexOf(' ') != -1){ //show attributes
						lastTag = lastTag.substring(0, lastTag.indexOf(' '));
						lastTag = lastTag.replace('<','');
						let tagObj = vf.definition[lastTag];
						if(tagObj){
							for (var key in tagObj.attribs) {
								if (tagObj.attribs.hasOwnProperty(key)) {
									var attr = tagObj.attribs[key];
									let completion = new vscode.CompletionItem(`${key}: ${attr.type}`,
												vscode.CompletionItemKind.Field);

									completion.insertText = `${key}="${attr.type}"`
									completions.push(completion);
								}
							}
							return completions;
						}
					}else{ //no spacing for auto-complete
						return null;
					}
				}else{ //not in an apex tag
					if(lastOpen == position.character-1){
						break;
					}
					return null;
				}
			}

			i--;
		}


        for (var key in vf.definition) {
            if (vf.definition.hasOwnProperty(key)) {
                var element = vf.definition[key];
                let completion = new vscode.CompletionItem(key,
                                        vscode.CompletionItemKind.Keyword);
                let preCharacter = document.getText(new vscode.Range(position.translate(0,-1),position));
				if(preCharacter != '<'){
					completion.insertText = `<${key}`;
				}

				completions.push(completion);
            }
        }

        return completions;

	}


}