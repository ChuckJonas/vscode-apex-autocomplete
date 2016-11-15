# Apex Auto-complete

This extension provides some level of auto-complete for the salesforce apex programming language.

This is pretty much just a container for the autocomplete functionality from the [tooling-force.com](https://github.com/neowit/tooling-force.com) library by [Andrey Gavrikov](https://github.com/neowit).

## Features

Currently provides auto-complete on the following:

* System namespaces
* Class methods & properties

Possible future completions:

* SObject fields
* SOQL Queries
* Annotations

## Requirements

* Mavensmate
* Java

## Known Issues

This is running an external jar that is not really optimized for the interfaces provided by vs-code.
Because of this, auto-complete may take some time to respond.
