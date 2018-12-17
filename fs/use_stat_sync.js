'uise strict';

var fs = require('fs');

var stat = fs.statSync('output.txt');
console.log('isFile: ' + stat.isFile());
console.log('isDirectory: ' + stat.isDirectory());
console.log('size: ' + stat.size);
console.log('birth time: ' + stat.birthtime);
console.log('modified time: ' + stat.mtime);