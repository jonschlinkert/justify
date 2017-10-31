# justified [![NPM version](https://img.shields.io/npm/v/justified.svg?style=flat)](https://www.npmjs.com/package/justified) [![NPM monthly downloads](https://img.shields.io/npm/dm/justified.svg?style=flat)](https://npmjs.org/package/justified) [![NPM total downloads](https://img.shields.io/npm/dt/justified.svg?style=flat)](https://npmjs.org/package/justified) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/justified.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/justified)

> Wraps words to a specified length and justifies the text in each line.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save justified
```

## Usage

```js
var justify = require('justify');

justify('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
```

Results in:

```
Lorem  ipsum dolor  sit   amet, consectetur  adipiscing
elit,  sed do eiusmod  tempor incididunt  ut  labore et
dolore  magna  aliqua.  Ut  enim ad minim  veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex
ea  commodo consequat.  Duis    aute  irure    dolor in
reprehenderit in voluptate  velit esse cillum dolore eu
fugiat    nulla  pariatur.    Excepteur  sint  occaecat
cupidatat  non proident,    sunt in culpa   qui officia
deserunt mollit anim id est laborum.
```

## Options

See [word-wrap](https://github.com/jonschlinkert/word-wrap) for additional options beyond the following.

### options.width

**Type**: `number`

**Default**: `55`

Set the maximum width for the justified text.

### options.indent

**Type**: `number`

**Default**: `0`

Add the specified number of spaces (left padding) before each line in the given string.

### options.random

**Type**: `function`

**Default**: a pseudo-random function is used to provide the appearance of randomization. The purpose of this is to ensure that whitespace doesn't appear to be somewhat "aligned" in columns on the left or right side of the text (which is distracting to readers), whilst also making the result technically predictable so that you're not getting a different result every time you call the "justified" function.

### options.justifyLastLine

**Type**: `boolean|function`

**Default**: `false`

The last line in the string is not justified by default.

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [pad-left](https://www.npmjs.com/package/pad-left): Left pad a string with zeros or a specified string. Fastest implementation. | [homepage](https://github.com/jonschlinkert/pad-left "Left pad a string with zeros or a specified string. Fastest implementation.")
* [pad-right](https://www.npmjs.com/package/pad-right): Right pad a string with zeros or a specified string. Fastest implementation. | [homepage](https://github.com/jonschlinkert/pad-right "Right pad a string with zeros or a specified string. Fastest implementation.")
* [repeat-string](https://www.npmjs.com/package/repeat-string): Repeat the given string n times. Fastest implementation for repeating a string. | [homepage](https://github.com/jonschlinkert/repeat-string "Repeat the given string n times. Fastest implementation for repeating a string.")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 17 | [jonschlinkert](https://github.com/jonschlinkert) |
| 2 | [parro-it](https://github.com/parro-it) |

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](http://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on October 31, 2017._