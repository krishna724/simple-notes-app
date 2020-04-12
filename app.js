const chalk = require('chalk');
const notes = require("./notes.js");
const yargs = require('yargs');

//customize yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})
yargs.command({
    command: 'listNotes',
    describe: 'List your notes',
    handler(){
        notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})
yargs.parse();
//add, remove, read, list
// console.log(process.argv);
// console.log(yargs.argv);

// const fs = require("fs");
// // fs.writeFileSync('firstfile.txt',"this file is created by using nodejs!!!");
// fs.appendFileSync('firstfile.txt',"My name is bala I am from nellore I am 25 years old");
// const getNotes = require("./notes.js");
// const validator = require('validator');
// import validator from 'validator';
// const chalk = require('chalk');
// let notes = getNotes();
// console.log(notes);
// console.log(chalk.green.bold.inverse('Success!'));
// console.log(process.argv[2]);
// console.log(validator.isEmail("fdfsfdadsgoogle.com"));
// console.log(validator.isURL('https:/fsdfasdfsd.com'));