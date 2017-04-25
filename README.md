# Salesforce Language Support

*(Previously 'Salesforce Auto-Complete +')*

[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/chuckjonas.apex-autocomplete.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=chuckjonas.apex-autocomplete)

This extension provides code completion and other language services for the salesforce apex programming language.

## Features

### Code Completion

![Code Completion](https://raw.githubusercontent.com/ChuckJonas/vscode-apex-autocomplete/master/images/code-completion.gif)

![SOQL Completion](https://raw.githubusercontent.com/ChuckJonas/vscode-apex-autocomplete/master/images/soql-complete.gif)

Currently provides auto-complete on the following:

* System namespaces
* Class methods & properties
* Annotations
* Visualforce tags & Attributes (beta)
* SObject fields (requires auth)
* SOQL Queries   (requires auth)

### Go-to/Peak Definition

![Go To Definitions](https://raw.githubusercontent.com/ChuckJonas/vscode-apex-autocomplete/master/images/go-to-def.gif)

Quickly navigate to variable, function & class declarations

### Syntax checking

Save time by spotting grammatical errors before sending code up to salesforce to compile.

### Navigate Document Symbols

Quickly navigate to any function, property or subclass.  In the "Quick Open" bar `cmd-p` simply type `@` to navigate document symbols.

![Symbol Navigation](https://raw.githubusercontent.com/ChuckJonas/vscode-apex-autocomplete/master/images/document-symbols.gif)

### Document Comment Generator

Generate Documenation Comments based on the context. To use, set cursor anywhere in the context of the document and run `Generate Apexdoc`.

![Doc Generation](https://raw.githubusercontent.com/ChuckJonas/vscode-apex-autocomplete/master/images/doc-generation.gif)

Currently support [Apexdoc](https://github.com/SalesforceFoundation/ApexDoc) and [Javadoc](http://www.oracle.com/technetwork/articles/java/index-137868.html) style comments on the following symbol types:

* Class Header
* Constructors
* Properties
* Methods

## Requirements

* `src` folder must be in root of workspace
* Java (`>1.8`) runtime installed an on path

## Configuration

Apex Class & VisualForce completions should work "out of the box".

To get completions on SObject & SOQL Queries, you must add org creditionals to your workspace settings:

```json
     // SF User Name
    "apexAutoComplete.userName": "johnDoe@example.com",

    // Password + Security Token
    "apexAutoComplete.password": "abc123456789",

    // Login Url
    "apexAutoComplete.instanceUrl": "https://test.salesforce.com",

    // enables grammatic syntax checking on document change
    "apexAutoComplete.checkSyntax": "true",

    // if check sytanx is enable, how long to wait after typing
    "apexAutoComplete.checkSyntaxDelay": 400,

    //The format of document generation to use. Currently support `apexdoc` & `javadoc`
    "apexAutoComplete.docGenerationFormat": "apexdoc",

    // port to run the force.tooling service on
    "apexAutoComplete.port": 6500,
```

Please reload after updating settings!

## Known Issues

After running a completion for the first time, a folder called `.vim-foce.com` will be created in your workspace root.
This is a side effect of the current version of `tooling-force.com`.

## Legal

This is pretty much just a container for the autocomplete functionality from the [tooling-force.com](https://github.com/neowit/tooling-force.com) library by [Andrey Gavrikov](https://github.com/neowit).

Third-Party Licenses:

* [tooling-force.com](https://github.com/neowit/tooling-force.com) [LGPL v3](http://www.gnu.org/licenses/)
* [Force.com Web Service Connector (WSC)](https://github.com/forcedotcom/wsc) - see [LICENSE.md](https://github.com/forcedotcom/wsc/blob/master/LICENSE.md)
* [Apache Commons-logging](http://commons.apache.org/proper/commons-logging/) - [Apache 2.0 License](http://www.apache.org/licenses/)
* [Akka](http://akka.io/) - [Apache 2.0 License](http://www.apache.org/licenses/)
* [ANTLR 4](http://www.antlr.org/) - [BSD license](http://www.antlr.org/license.html)
* [spray-json](https://github.com/spray/spray-json) - [Apache 2.0 License](http://www.apache.org/licenses/)