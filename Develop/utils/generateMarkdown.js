// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License:](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
}
return '';

}
function renderLicenseLink(license) {
  if (license !== 'None') {
    return "- [License](#license)";
}
   return "";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# Project Name: ${response.title}
 
  ## Description
  ${response.description}
  ## author
  ${response.Author}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [dependencies](#dependencies)
  - [Contribution](#contribution)
  - [Test](#tests)
  ${renderLicenseLink(response.license)}
  - [Questions](#Question)
  - [Additional](#additional)

  ## Installation
  ${response.installation}
  
  ## Usage

  ${response.description}

  ${response.technology}

  ## Dependencies
  ${response.dependencies}

  ## Contributors
  ${response.collaborators}
  ## Tests
  ${response.test}
  ## License
  ${response.license}
  ${renderLicenseBadge(response.license)}

  ## Contact
  For further contact information, contact me here:
  * Email Address: ${response.email}
  * GitHub: [${response.github}](https://github.com/${response.github})
  
  ## Any additional information
  ${response.additional}
  

  
`;
  
}

module.exports = generateMarkdown;
