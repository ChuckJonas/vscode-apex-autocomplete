# Apex Auto-complete

This extension provides some level of auto-complete for the salesforce apex programming language.

This is pretty much just a container for the autocomplete functionality from the [tooling-force.com](https://github.com/neowit/tooling-force.com) library by [Andrey Gavrikov](https://github.com/neowit).

## Features

Currently provides auto-complete on the following:

* System namespaces
* Class methods & properties
* Annotations

Possible future completions:

* SObject fields
* SOQL Queries

## Requirements

* `src` folder must be in root of workspace
* Java runtime installed an on path

## Known Issues

After running a completion for the first time, a folder called `.vim-foce.com` will be created in your workspace root.
This is a side effect of the current version of `tooling-force.com`.
