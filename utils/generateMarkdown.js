// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badges = {
    'Apache': `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    'Boost': `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
    'BSD': `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
    'Creative Commons': `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
    'Eclipse': `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
    'GNU': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    'MIT': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    'Mozilla': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    'None': ''
  }
  return badges[license]
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let links = {
    'Apache': `https://opensource.org/licenses/Apache-2.0`,
    'Boost': `https://www.boost.org/LICENSE_1_0.txt`,
    'BSD': `https://opensource.org/licenses/BSD-3-Clause`,
    'Creative Commons': `http://creativecommons.org/publicdomain/zero/1.0/`,
    'Eclipse': `https://opensource.org/licenses/EPL-1.0`,
    'GNU': `https://www.gnu.org/licenses/gpl-3.0`,
    'MIT': `https://opensource.org/licenses/MIT`,
    'Mozilla': `https://opensource.org/licenses/MPL-2.0`,
    'None': ''
  }
  return links[license]
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `Licensed for open source use through ${license}. Visit ${renderLicenseLink(license)} for more details.`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

${renderLicenseBadge(data.license)}

  ### ${data.description}
  

  

  ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  Please feel free to reach out!
  
  ${data.questionsEmail}
  ${data.questionsGithub}
`;
}

module.exports = generateMarkdown;


