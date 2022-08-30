// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fsAsync = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your Title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a Description for your project.'
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage instructions?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the instructions for future contributions?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['MIT', 'ISC', 'Apache_2.0', 'none'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your github username?',
  },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fsAsync.writeFile(path.join(process.cwd(), fileName), data)
}

function promptUser() {
  inquirer
    .prompt(
      questions
    )
    .then((answers) => { 
      // console.log(answers)
      
      writeToFile('readme.md', generateMarkdown({...answers}));
    })
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
}

// Function call to initialize app
init();
