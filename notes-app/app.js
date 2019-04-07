const valid = require('validator');
const utils=require('./utils.js');
const notes = require('./notes.js');
const chalk = require('chalk');
const sum = utils(1,2);

console.log(sum);
console.log(notes());

console.log(chalk.green('rafa'));
console.log(chalk.blue('rafa'));

console.log(valid.isEmail('example.com'));
console.log(valid.isURL('www.google.com'));