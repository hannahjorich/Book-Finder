// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description    
${data.description}  

## Table of Contents
1. [Description](#Description)
2. [UserStory](#UserStory)
3. [Features](#Features)
4. [License](#License)
5. [Links](#Links)
6. [Demo](#Demo)
7. [Resources](#Resources)
8. [FutureDevelopment](#FutureDevelopment)
9. [Contributors](#Contributors)


## User Story
${data.userStory} 

## Features
${data.Features}

## License
This project is licensed under the terms of the ${data.license} license.

## Links
${data.Links}

## Demo
${data.Demo}

## Resources
${data.Resources}

## Future Development
${data.FutureDevelopment}

## Contributors
${data.Contributors}

  `;
  }
  
  module.exports = generateMarkdown;