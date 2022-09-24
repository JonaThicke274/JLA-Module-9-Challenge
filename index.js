// Packages for application: Inquirer, File System, and generateMarkdown.js
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkDown = require("./utils/generateMarkdown.js")


// Array of questions for user
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
        message: "To install the necessary dependencies, please run the following code: (input code)"
    },
    {
        type: "input",
        name: "usage",
        message: "To run the application, please run the following code: (insert code)",
    },
    {
        type: "input",
        name: "testing",
        message: "To test the application, please run the following code: (insert code)" 
    },
    {
        type: "input",
        name: "contributions",
        message: "Provide any relevant contributions info.",
    },
];

// Function to prompt user to answer questions using inquirer
const promptUser = () => {
    return inquirer.prompt(questions);
}

// Function for writing/generating the file with content that is passed from generateMarkdown.js
const writeToFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileContent, err => {
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

// Function that initliazes app
function init() {
    // Tells user the application has initialized and that they will begin to answer questions
    console.log("This a README generator. Please answer the following questions to generate your README:");
    promptUser()
        // Passes the user's answers to genMarkdown which calls from generateMarkdown.js
        .then(answers => {
            // console.log(answers);
            return genMarkDown(answers);
        })
        // Passes the generated contents into writeToFile to generate the READMME.md file in the dist folder
        .then(fileContent => {
            // console.log(fileContent);
            return writeToFile(fileContent);
        })
        // Shows the user the results file generation.
        .then(writeFileResponse => {
            console.log(writeFileResponse.message);
        })
        // Catches any error and displays message below indicating error.
        .catch(err => {
            console.log("Error generating README.md. File was not created.")
        })
};

// Function call to initialize app
init();
