// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [ 

    {///Project name

        type: "input",
        name: "title",
        message: "What Do you wanna name the project?"
    },
    {//The author or creator of the project

        type: "input",
        name: "Author",
        message: "What the name of the person who created this project?"
    },
    {// The collaborators

        type: "input",
        name: "collaborators",
        message: "Who else contributed to the project?"
    },
    {///Your contact info email

        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {//Your contact info Git hub UserName

        type: "input",
        name: "github",
        message: "What is your GitHub user name?",
    },
    {//The technologies being used ont the project

        type: "checkbox",
        name: "technology",
        message: "What type of technology did you use on the project?",
        choices: ["HTML","Javacript","Node", "CSS", "JQuery","Node"]
    },
    {//The usage of the project

        type: "input",
        name: "description",
        message: "What is a short description of your project?",
    },
 
    {//The license of the project should have links

        type: "list",
        name: "license",
        message: "What type of license should your project have?",
        choices: ["MIT", "Apache 2.0","GPL 3.0","BSD 3","None"]
    },
    {//The dependencies used for the project

        type: "input",
        name: "installation",
        message: "What command should be used to install dependencies?",
    },
    {//The Test

        type: "input",
        name: "test",
        message: "What command should be used to run tests?",
    },
    {///Additional info on the Repo

        type: "input",
        name: "additional",
        message: "What other information would you like to give to the user on this project?",
    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", README, (err) =>
            err ? console.error(err) : console.log("file Created"));
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
     })
}

// Function call to initialize app
init();
