'use strict';

/*!
 * justified <https://github.com/jonschlinkert/justified>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */

require('mocha');
var assert = require('assert');
var justify = require('./');

var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

describe('justify:', function() {
  it('should justify text to the specified width', function() {
    assert.equal(justify('Lorem ipsum dolor sit amet', {width: 15}), [
      '  Lorem      ipsum',
      '  dolor sit amet\n',
    ].join('\n'));
  });

  it('should justify text using default settings', function() {
    assert.equal(justify(text), [
      '  Lorem  ipsum dolor  sit  amet, consectetur adipiscing',
      '  elit,  sed do eiusmod  tempor  incididunt   ut labore',
      '  et  dolore magna  aliqua.   Ut enim ad  minim veniam,',
      '  quis  nostrud exercitation  ullamco  laboris nisi  ut',
      '  aliquip  ex ea  commodo  consequat.  Duis  aute irure',
      '  dolor   in  reprehenderit   in  voluptate  velit esse',
      '  cillum  dolore eu fugiat   nulla pariatur.  Excepteur',
      '  sint   occaecat  cupidatat    non proident,   sunt in',
      '  culpa  qui officia  deserunt   mollit  anim    id est',
      '  laborum .\n'
    ].join('\n'));
  });
});
