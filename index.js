
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your application',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this application intended to be used?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to this application?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your application?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',

    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license should be used?',
        choices: ["Apache 2.0", "GNU GPL v2","MIT", "No License"]
    },

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        err?console.error(err):console.log('Thanks!')
    })
}


function init() {
    inquirer
    .prompt(questions)
    .then(response => {
        console.log(response)
        let inputString = generateMarkdown(response)
        console.log(inputString)

        writeToFile('README.md', inputString)
    })
}

// Function call to initialize app
init();
