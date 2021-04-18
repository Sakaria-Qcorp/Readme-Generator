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

        type: "checkbox",
        name: "Technology",
        message: "What type of technology did you use on the project?",
        choices: ["HTML","Javacript","Node", "CSS", "JQuery"]
    },
    {

        type: "input",
        name: "Author",
        message: "What the name of the person who created this project??"
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
     }).then(writeToFile("Readme.md",questions));
}

// Function call to initialize app
init();
