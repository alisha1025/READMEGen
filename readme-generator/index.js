const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('../Develop/generateMarkdown');

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
        validate: input => input ? true : 'Project title is required.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project:',
        validate: input => input ? true : 'Description is required.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions:',
        default: 'npm start'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
        default: 'Please follow the standard guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
        default: 'None'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.error('Error writing README.md', err);
        } else {
            console.log('README.md has been generated!');
        }
    });
}

// Prompt user and generate README
inquirer.prompt(questions)
    .then(answers => writeToFile('README.md', answers))
    .catch(error => console.error('Error prompting user', error));
