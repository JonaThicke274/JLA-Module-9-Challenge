// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(fileContent) {
  return `
  # ${fileContent.title}

  ## Description

  ${fileContent.description}

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contributions](#contributions}
  * [Questions](#questions)
  
  ## Installation

  To install the necessary dependencies, please run the following code:
  
  \`
  ${fileContent.installation}
  \`

  ## Usage

  To run the application, please run the following code:
  
  \`
  ${fileContent.usage}
  \`

  ## Tests

  To test the application, please run the following code:
  
  \`
  ${fileContent.testing}
  \`

  ## Contributions

  ${fileContent.contributions}

  ## Questions

  If you have any questions about this repository, please contact me at [${fileContent.email}](mailto:${fileContent.email}). Feel free to look at more of my work on Github at [${fileContent.username}](https://github.com/${fileContent.username})
  
  `;
};

module.exports = generateMarkdown;
