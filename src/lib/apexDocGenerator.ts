import {TextEditor, TextEditorEdit, Position} from 'vscode';
import {Symbol} from 'apex-parser-ts'
import {DocumentCommentGenerator} from './docCommentCommand';
import * as fs from 'fs';

export class ApexDocGenerator implements DocumentCommentGenerator{
    private static COMMENT_START:string = '/**';
    private static COMMENT_BODY:string = '*';
    private static COMMENT_END:string = '*/';

    public generateClassDoc(sym: Symbol) :string[]{
        let body = [
             '@author',
             '@date',
             '@group',
             '@group-content',
             '@description'
        ];
        return this.generateComment(body);
    }

    public generatePropertyComment(sym: Symbol) :string[]{
        let body = [
             '@description'
        ];
        return this.generateComment(body);
    }

    public generateConstructorDoc(sym: Symbol) :string[]{
        let body = ['@description Constructor.'];
        this.generateParamsDoc(body, sym.attributes.params);
        return this.generateComment(body);
    }

    public generateMethodDoc(sym: Symbol) :string[]{
        let body = [`@description`];
        this.generateParamsDoc(body, sym.attributes.params);
        if(sym.type != 'void'){
            body.push(`@return`);
        }
        body.push('@example');
        return this.generateComment(body);
    }

    protected generateComment(body: string[]) :string[]{
        for(let i = 0; i < body.length; i++){
            body[i] = ` ${ApexDocGenerator.COMMENT_BODY} ${body[i]}`
        }

        body.unshift(`${ApexDocGenerator.COMMENT_START}`)
        body.push(` ${ApexDocGenerator.COMMENT_END}`)
        return body;
    }

    protected generateParamsDoc(body: string[], params){
        if(params){
            params.forEach(param => {
                body.push(`@param ${param.name}`);
            });
        }
    }
}

export class JavaDocGenerator extends ApexDocGenerator{
     public generateClassDoc(sym: Symbol) :string[]{
        let body = [
             '@author'
        ];
        return this.generateComment(body);
    }

    public generatePropertyComment(sym: Symbol) :string[]{
        let body = [
             ''
        ];
        return this.generateComment(body);
    }

    public generateConstructorDoc(sym: Symbol) :string[]{
        let body = ['Constructor.'];
        this.generateParamsDoc(body, sym.attributes.params);
        return this.generateComment(body);
    }

    public generateMethodDoc(sym: Symbol) :string[]{
        let body = [''];
        this.generateParamsDoc(body, sym.attributes.params);
        if(sym.type != 'void'){
            body.push(`@return`);
        }
        return this.generateComment(body);
    }
}