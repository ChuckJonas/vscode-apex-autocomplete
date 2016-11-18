import * as vscode from 'vscode';
import * as fs from 'fs';
import * as net from 'net';
import * as child_process from 'child_process';

import * as vf from './visualForce';

//there's gotta be a better way to do this...  Seems to work surprisingly well tho
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

		let completions = new Array<vscode.CompletionItem>();

		let i = position.line;
		let lastOpenTag = -1;
		while(lastOpenTag == -1 ){
			if(i<0){
				break;
			}

			let line = document.lineAt(i).text;

			if(position.line == i){ //only look before cursor
				line = line.substr(0, position.character);
			}

			lastOpenTag = line.lastIndexOf('<');
			let lastCloseTag = line.lastIndexOf('>');
			let isOutside = false;
			if(line.charAt(lastCloseTag-1) == '/'){
				isOutside = true;
			}

			let lastTagApex = line.lastIndexOf('<apex:');

			if(lastOpenTag != -1 && lastOpenTag > lastCloseTag){ // we are in a tag
				if(lastTagApex == lastOpenTag){ //we are in a apex: tag
					let apexTag = this.getApexTag(line, lastTagApex);
					return this.showTagAttributes(apexTag);
				}else{ //not in an apex tag
					if(lastOpenTag == position.character-1 && line.substr(lastOpenTag,lastOpenTag+1) != ' '){
						break;
					}
					return null;
				}
			}
			i--;
		}

        return this.showApexTags(document, position);
	}

	private getApexTag(line: string, start: number){
		let tagObj: any;
		let lastTag = line.substr(start, line.length);
		if(lastTag.indexOf(' ') != -1){ //show attributes
			lastTag = lastTag.substring(0, lastTag.indexOf(' ')).replace('<','');
			tagObj = vf.definition[lastTag];
		}
		return tagObj
	}

	private showTagAttributes(apexTag: any){
		let completions = new Array<vscode.CompletionItem>();
		if(apexTag){
			for (var key in apexTag.attribs) {
				if (apexTag.attribs.hasOwnProperty(key)) {
					var attr = apexTag.attribs[key];
					let completion = new vscode.CompletionItem(`${key}: ${attr.type}`,
								vscode.CompletionItemKind.Field);

					completion.insertText = `${key}="${attr.type}"`
					completions.push(completion);
				}
			}
		}
		return completions;
	}

	private showApexTags(document: vscode.TextDocument, position: vscode.Position): Array<vscode.CompletionItem>{
		let completions = new Array<vscode.CompletionItem>();
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