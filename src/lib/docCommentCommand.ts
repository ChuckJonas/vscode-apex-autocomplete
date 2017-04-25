import {TextEditor, TextEditorEdit, Position} from 'vscode';
import {ExtractSymbols, SymbolReader, Symbol} from 'apex-parser-ts'
import {EOL} from 'os'

export interface DocumentCommentGenerator {
    generateClassDoc(sym: Symbol): string[];
    generatePropertyComment(sym: Symbol): string[];
    generateConstructorDoc(sym: Symbol): string[];
    generateMethodDoc(sym: Symbol): string[];
}

export class DocumentCommentCommand{

    private textEditor: TextEditor;
    private commentGenerator: DocumentCommentGenerator;
    constructor(textEditor: TextEditor, commentGenerator: DocumentCommentGenerator){
        this.textEditor = textEditor;
        this.commentGenerator = commentGenerator;
    }

    public generateDocComment(){
        let line = this.textEditor.selection.start.line + 1;
        let fileName: string;

        let symbolExtractor = new ExtractSymbols();
        let readSymbols = symbolExtractor.findSymbolsFromString(this.textEditor.document.getText())

        //get closest symbol
        let BreakException = {};
        try{
            readSymbols.symbolTable.symbols.forEach(sym => {
                if(sym.source.start.line <= line && sym.source.stop.line >= line){
                    let comment;
                    if(sym.symbolType == 'method'){
                        comment = this.commentGenerator.generateMethodDoc(sym);
                    }else if(sym.symbolType == 'constructor'){
                        comment = this.commentGenerator.generateConstructorDoc(sym);
                    }else if(sym.symbolType == 'field'){
                        comment = this.commentGenerator.generatePropertyComment(sym);
                    }else if(sym.symbolType == 'class' && sym.source.start.line == line){
                        comment = this.commentGenerator.generatePropertyComment(sym);
                    }

                    if(comment){
                        this.writeComment(comment, sym.source.start.line-2);
                        throw BreakException;
                    }
                }
            });
        }catch(e){
            if (e !== BreakException) throw e;
        }
    }

    private writeComment(body: string[], insertLine: number){
       let insertColumn = this.textEditor.document.lineAt(insertLine).range.end.character;
       let padLength = this.textEditor.document.lineAt(insertLine+1).firstNonWhitespaceCharacterIndex;
       let pad = this.generateWhitespace(padLength);

       if(body.length > 0){
            let comment = `${EOL}${pad}${body.shift()}${EOL}`;
            for(let i = 0; i < body.length; i++){
                if(i == body.length-1){ //last line
                    comment += ` ${pad}${body[i]}`;
                }else{
                    comment += ` ${pad}${body[i]}${EOL}`;
                }
            }
            this.textEditor.edit((edit: TextEditorEdit) => {
                edit.insert(new Position(insertLine, insertColumn), comment);
            });
       }
    }

    private generateWhitespace(length) {
        let s: string = '';
        for(let i = 0; i < length; i++){
            s += ' ';
        }
        return s;
    }
}



