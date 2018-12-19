'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createReadStream('copied.txt');

rs.pipe(ws);