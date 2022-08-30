// TODO: Create a function that returns a license badge based on which license is passed in 
// If there is no license, return an empty string
function renderLicenseBadge(license = [
]) { 
  if(typeof license !== 'string') throw new TypeError('license must be a string')
  if(license === 'none') return ''
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none') return ''
  return `* [License](#license) \n`
 }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none') return ''
  return `## License \n 
  This project is protected by the ${license} license.` 

 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## ReadMe Description \n
  ${data.description} 
  ## Table of Contents: \n
  * [Installation](#installation) \n
  * [Contributors](#contributors) \n
  * [Usage](#usage) \n
  * [Tests](#tests) \n
  * [Questions](#questions) \n
  ${renderLicenseLink(data.license)}
  ## Name: \n
  ${data.name}
  ## Installation \n
  ${data.installation}
  ## Contributors \n
  ${data.contribution}
  ## Usage \n
  ${data.usage} 
  ## Tests \n
  ${data.test}
  ${renderLicenseSection(data.license)}
  ## Questions \n
  Github: [${data.username}](https://github.com/Sebascrab) \n
  Email: ${data.email} \n
  

`;
}

module.exports = generateMarkdown;
