'use strict'

function hello() {
    console.log('Hello, nodejs');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}

module.exports = {
    hello:hello,
    greet:greet
}