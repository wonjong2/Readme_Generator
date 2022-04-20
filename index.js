const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            // Project title
            type: 'input',
            message: 'what is your project title?',
            name: 'title',
        },
        {
            //  Project Description
            type: 'editor',
            message: 'Enter a description: ',
            name: 'description',
        },
        {
            // Installation instructions
            type: 'editor',
            message: 'Enter a installation instructions: ',
            name: 'install',
        },
        {
            // Usage Information
            type: 'editor',
            message: 'Enter a usage information: ',
            name: 'usage',
        },
        {
            // Contribution Guideline
            type: 'input',
            message: 'Enter a contribution guideline: ',
            name: 'contributing',
        },
        {
            // Test Instruction
            type: 'editor',
            message: 'Enter a test instructions: ',
            name: 'tests',
        },
        {
            // License
            type: 'rawlist',
            message: 'Choose a license for your application: ',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license',
            pageSize: 8,
        },
        {
            // GitHub Username
            type: 'input',
            message: 'Enter your GitHub username: ',
            name: 'github',
        },
        {
            // Email address
            type: 'input',
            message: 'Enter your email address: ',
            name: 'email',
            // Validation the format of email address
            validate(value) {
                const pass = value.match(/\S+@\S+\.\S+/);
                if(pass) {
                    return true;
                }
                return 'Please enter your email with valid format'
            }
        },
    ])
    .then(response => {
        console.log(response);
        // Create README.md file with contents
        fs.writeFile('README.md', generateContents(response), (error) => error? console.error(err):console.log("Succeess"));
    })
    .catch(err => 
        console.log(err)
    );


function generateContents({title, description, install, usage, contributing, tests, license, github, email}) {
    return `# ${title}

## Description

${description}

## Table of Contents


## Installation

${install}

## Usage

${usage}

## License

${license}

## Contributing

${contributing}

## Test

${tests}

## Questions

1. GitHub: https://github.com/${github}
2. If you have any questions, please reach out to ${email}
`
}