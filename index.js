const inquirer = require('inquirer');
const fs = require('fs');

// Object for License Bagdes
const licenseBadges = {
    'GNU AGPLv3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    'GNU GPLv3' : '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' ,
    'GNU LGPLv3' : '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', 
    'Mozilla Public License 2.0' : '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 
    'Apache License 2.0' : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
    'MIT License' : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
    'Boost Software License 1.0' : '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'The Unlicense' : '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/),'
};

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
    const licenseBadge = licenseBadges[license];

    return `# ${title}
${licenseBadge}

## Description

${description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Test](#test)
6. [Questions](#questions)

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