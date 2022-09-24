// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkDown = require("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a short description of your project.",
    },
    {
        type: "list",
        name: "license",
        message: "What license(s) does your project have?",
        choices: [
            "Apache 2.0",
            "BSD 3-Clause",
            "Common Development and Distrubution License",
            "Eclispe Public License",
            "GNU General Public License (GSL)",
            "MIT",
            "Mozilla Public License",
            "No License"
        ],
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the necessary steps to install your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for usage of your project.",
    },
    {
        type: "input",
        name: "testing",
        message: "How can a user run tests?" 
    },
    {
        type: "input",
        name: "contributions",
        message: "Provide any relevant contributions info.",
    },
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
const writeToFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist.README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ({
                ok: true,
                message: "README.md file generated! Please see dist folder."
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    console.log("This a README generator. Please answer the following questions to generate your README:");
    promptUser()
        .then(answers => {
            console.log(answers);
            return genMarkDown(answers);
        })
        .then(fileContent => {
            console.log(fileContent);
            return writeToFile(fileContent);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse.message);
        })
        .catch(err => {
            console.log("Error generating README.md. File was not created.")
        })
};

// Function call to initialize app
init();
