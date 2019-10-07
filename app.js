const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')
const log = console.log


//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

const removeNote = function (title) {
    console.log(title)
}

// add, remove, read, list
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {
        notes.listNotes()
    }
})

//yargs.parse()
 log(yargs.argv)


// console.log(process.argv)
// const command = process.argv[2]


// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     log('Removing note')
// }



// const msg = getNotes()
// console.log(msg)

// console.log(validator.isURL('https:/mead.io'))

// const add = require('./utils.js')

// const sum = add(4, -2)

// console.log(sum);

// const validator = require('validator')

// console.log(chalk.red('Error!'))
// // console.log(chalk.bold.blue('How are you?'))
// // console.log(chalk.inverse('This is the inverse'))
// // log(chalk.magenta('This is the shorthand for console.log'))
// // log(chalk.bgMagenta('How to get background magenta'))
// // log(chalk.strikethrough('How to strikethrough a line.'))

// console.log(process.argv[2])