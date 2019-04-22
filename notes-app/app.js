const valid = require('validator');
const chalk = require('chalk');
const yargs =require('yargs');

//set up the version
yargs.version('1.1.0');

//add and remove with yard
yargs.command({
    command : 'add',
    describe: 'add a new note',
    handler: function(){
        console.log("yargs add note")
    }
});

yargs.command({
    command : 'remove',
    describe: 'remove a new note',
    handler: function(){
        console.log("remove add note")
    }
});

yargs.command({
    command : 'read',
    describe: 'read a new note',
    handler: function(){
        console.log("yargs read note")
    }
});

yargs.command({
    command : 'list',
    describe: 'list a note',
    handler: function(){
        console.log("list  note")
    }
});

console.log(yargs.argv);