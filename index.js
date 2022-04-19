const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is your project title?',
            name: 'title',
        },
        {
            type: 'editor',
            message: 'Enter a description: ',
            name: 'description',
        },
        {
            type: 'editor',
            message: 'Enter a installation instructions: ',
            name: 'install',
        },
        {
            type: 'editor',
            message: 'Enter a usage information: ',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter a contribution guideline: ',
            name: 'contributing',
        },
        {
            type: 'editor',
            message: 'Enter a test instructions: ',
            name: 'tests',
        },
        {
            type: 'rawlist',
            message: 'Choose a license for your application: ',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license',
            pageSize: 8,
        },
        {
            type: 'input',
            message: 'Enter your GitHub username: ',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email address: ',
            name: 'email',
        },
    ])
    .then(response => 
        console.log(response)
    )
    .catch(err => 
        console.log(err)
    );