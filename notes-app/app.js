const valid = require('validator');
const utils=require('./utils.js');
const notes = require('./notes.js');
const chalk = require('chalk');
const sum = utils(1,2);
const yargs =require('yargs');


//yargs
console.log("Yargs");
console.log(yargs.argv);
const command = process.argv[2];

if(command==='add'){
    console.log("you are adding a note");
}else if(command==='remove'){
    console.log("you are remove a note");
}else if(command==='read'){
    console.log("you are reading a note");
}
//set up the version
yargs.version('1.1.0');

//add and remove with yard
yargs.command({
    command : 'add',
    describe: 'add a new note',
    handler: function(){
        console.log("yargs add note")
    }
})