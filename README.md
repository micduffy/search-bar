# search bar
[![Build Status](https://travis-ci.org/micduffy/search-bar.svg?branch=master)](https://travis-ci.org/micduffy/search-bar)
[![codecov](https://codecov.io/gh/micduffy/search-bar/branch/master/graph/badge.svg)](https://codecov.io/gh/micduffy/search-bar)
[![npm version](https://badge.fury.io/js/search-bar.svg)](http://badge.fury.io/js/search-bar)
[![devDependency Status](https://david-dm.org/micduffy/search-bar/dev-status.svg)](https://david-dm.org/micduffy/search-bar?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/micduffy/search-bar.svg)](https://github.com/micduffy/search-bar/issues)
[![GitHub stars](https://img.shields.io/github/stars/micduffy/search-bar.svg)](https://github.com/micduffy/search-bar/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/micduffy/search-bar/master/LICENSE)

## Demo
https://micduffy.github.io/search-bar/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Search Bar Test

## Installation

Install through npm:
```
npm install --save search-bar
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { SearchBarModule } from 'search-bar';

@NgModule({
  imports: [
    SearchBarModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/micduffy/search-bar/blob/master/demo/demo.component.ts).

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://micduffy.github.io/search-bar/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
