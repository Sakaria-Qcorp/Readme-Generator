// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [ 

    {

        type: "input",
        name: "projectName",
        message: "What Do you wanna name the project?"
    },
    {

        type: "input",
        name: "Author",
        message: "What the name of the person who created this project?"
    },
    {

        type: "input",
        name: "Email",
        message: "What is your email address?",
    },
    {

        type: "input",
        name: "Github UserName",
        message: "What is your GitHub user name?",
    },
    {

        type: "checkbox",
        name: "Technology",
        message: "What type of technology did you use on the project?",
        choices: ["HTML","Javacript","Node", "CSS", "JQuery","Node"]
    },
    {

        type: "input",
        name: "Description",
        message: "What is a short description of your project?",
    },
 
    {

        type: "list",
        name: "License",
        message: "What type of license should your project have?",
        choices: ["MIT", "Apache 2.0","GPL 3.0","BSD 3","None"]
    },
    {

        type: "input",
        name: "Dependencies",
        message: "What command should be used to install dependencies?",
    },
    {

        type: "input",
        name: "Test",
        message: "What command should be used to run tests?",
    },
    {

        type: "input",
        name: "Repo Info",
        message: "What information should a user have about the Repo?",
    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, json.stringify(data, null, "/n"), (err) => err ? 
    console.error(err) : console.log("The File Was written!!"));
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
     })
}

// Function call to initialize app
init();
