const inquirer = require("inquirer");
const fs = require("fs");
//https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309
const CURR_DIR = process.cwd();
console.log("TCL: CURR_DIR", CURR_DIR)

const options = fs.readdirSync(`${__dirname}/templates`);

const questions = [
  {
    name: 'name',
    type: 'input',
    message: "Project Name: ",
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  },
  {
    name: 'template',
    type: 'list',
    message: 'Project Type: ',
    choices: templates
  },
]

inquirer.prompt(questions)
  .then(answers => {
    console.log(answers);
});