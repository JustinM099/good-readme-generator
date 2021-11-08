// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'MIT', 'Mozilla']

function renderLicenseBadge(license) {
  let badge
switch (license) {
  case 'Apache':
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return badge
  case 'Boost':
    badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    return badge
  case 'BSD':
    badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    return badge
  case 'Creative Commons':
    badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
    return badge
  case 'Eclipse':
    badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    return badge
  case 'GNU':
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    return badge
  case 'MIT':
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    return badge
  case 'Mozilla':
    badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    return badge
  case 'None':
    badge = ''
    return badge
}}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch (license) {
  case 'Apache':
    return `https://opensource.org/licenses/Apache-2.0`
  case 'Boost':
    return `https://www.boost.org/LICENSE_1_0.txt`
  case 'BSD':
    return `https://opensource.org/licenses/BSD-3-Clause`
  case 'Creative Commons':
    return `http://creativecommons.org/publicdomain/zero/1.0/`
  case 'Eclipse':
    return `https://opensource.org/licenses/EPL-1.0`
  case 'GNU':
    return `https://www.gnu.org/licenses/gpl-3.0`
  case 'MIT':
    return `https://opensource.org/licenses/MIT`
  case 'Mozilla':
    return `https://opensource.org/licenses/MPL-2.0`
  case 'None':
    return ''
}}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  return `Licensed for open source use through ${license}. Visit ${renderLicenseLink(license)} for more details.`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ### ${data.description}
  

  ${renderLicenseBadge(data.license)}

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
