'use strict'

var fs = require('fs');

fs.readFile('sample.png',function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
		console.log(data.length);
	}

	var txt = data.toString('utf-8');
	console.log(txt);
	console.log(txt.length);

	var buffer = Buffer.from(txt, 'utf-8');
	console.log(buffer);
	console.log(buffer.length);
});