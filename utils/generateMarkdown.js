// Object containing the license badges and links that matches the same possible inputs the user will select from
const licenseBadgeAndLinks = {
  "Apache 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "BSD 3-Clause": "[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD--3--Clause-lightblue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "Common Development and Distrubution License": "[![License: CDDL 1.0](https://img.shields.io/badge/License-CDDL%201.0-red.svg)](https://opensource.org/licenses/CDDL-1.0)",
  "Eclispe Public License": "[![License!](https://img.shields.io/badge/License-EPL--2.0-orange.svg)](https://opensource.org/licenses/EPL-2.0",
  "GNU General Public License (GSL)": "[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Mozilla Public License":"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "No License": "",
};



// Function that generates the contents of the README.md file
function generateMarkdown(data) {
  
  data.licenseBadgeLink = licenseBadgeAndLinks[data.license];

  return `
  # ${data.title}

  ${data.licenseBadgeLink}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contributions](#contributions)
  * [Questions](#questions)
  
  ## Installation

  To install the necessary dependencies, please run the following code:
  
  \`
  ${data.installation}
  \`

  ## Usage

  To run the application, please run the following code:
  
  \`
  ${data.usage}
  \`

  ## Tests

  To test the application, please run the following code:
  
  \`
  ${data.testing}
  \`

  ## Contributions

  ${data.contributions}

  ## Questions

  If you have any questions about this repository, please contact me at [${data.email}](mailto:${data.email}). Feel free to look at more of my work on Github at [${data.username}](https://github.com/${data.username})
  
  `;
};

module.exports = generateMarkdown;
