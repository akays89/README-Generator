// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")
// TODO: Create an array of questions for user input
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
        type: 'checkbox',
        name: 'license',
        message: 'Which license should be used?',
        choices: [
            'MIT', 'Apache', 'GLP', 'BSD',
        ],
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
