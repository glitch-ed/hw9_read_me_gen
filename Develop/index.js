const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const markDown = require("./generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of our application?"
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a short description of your application."
      },
      {
        type: "input",
        name: "install",
        message: "Please give a small step by step description of how to use your application."
      },
      {
        type: "input",
        name: "usage",
        message: "What does your application do, or what problem does it solve?"
      },
      {
        type: "input",
        name: "deployment",
        message: "Please enter the URL of your deployed application."
      },
      {
        type: "input",
        name: "colaborators",
        message: "PLease enter the name of any colaborators on this applicaiton including yourself."
      },
      {
        type: "input",
        name: "license",
        message: ""
      },
      {
        type: "input",
        name: "git",
        message: "What is you GitHub user name?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      }
    
];

// function to write README file

//function writeToFile("README.md", data) {
//}

// function to initialize program
function init() {
  return inquirer.prompt(questions)
}

// function call to initialize program
init()
  .then(function(data) {
    const answers = markDown.data;

    return writeFileAsync("README.md", answers);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });
