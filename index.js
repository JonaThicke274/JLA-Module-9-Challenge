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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
