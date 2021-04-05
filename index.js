const inquirer = require('inquirer');
const fs = require('fs');
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
let employees = [];


managers => {

inquirer
    .prompt([
      {
        type: 'input',
        message: "Please enter the team manager's name: ",
        name: "managerName",
      },
      {
        type: "input",
        message: "Enter manager employee ID: ",
        name: "managerId",
      },
      {
        type: "input",
        message: "Enter manager email: ",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "Please enter their office number: ",
        name: "officeNum",
      },
    ])
    .then((data) => {
      let managerPrint = new manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
      employeeArray.push(manager);
      return addPrompt();
    })
}
