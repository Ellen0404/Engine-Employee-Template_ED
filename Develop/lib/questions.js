const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// QUESTIONS TO USER
async function askBasic() {

    const responses = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is employee's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is employee's email?"
        },
        {
            type: "list",
            message: "What is employee's role?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]);
    // const { name, id, email, role } = responses;
    return responses;
};

// CHOOSE THE ROLE 
async function roleChosen(e) {
    const { name, id, email, role } = e;
    switch (role) {

        case "Manager":
            return managerRole({ name, id, email, role });

        case "Engineer":
            return engineerRole({ name, id, email, role });

        case "Intern":
            return internRole({ name, id, email, role });

        default:
            return "There is no such position in this company."

    }
};

async function managerRole(data) {
    const { name, id, email } = data;
    const res = await inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "What is Manager's office number?"
        },

    ]);
    const { officeNumber } = res;

    // CREATING NEW MANAGER
    const newManager = new Manager(name, id, email, officeNumber);

    return newManager;

    // if (addNewEmployee) {
    //     getUserInput();

    // } else {
    //     console.log("Thank you foy using my Engine-Employee-Template!");
    // }
};


async function engineerRole(data) {
    const { name, id, email } = data;
    const res1 = await inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is Engineer's GitHub username?"
        },

    ]);
    const { github } = res1;

    // CREATING NEW ENGINEER 
    const newEngineer = new Engineer(name, id, email, github);

    return newEngineer;

    // if (addNewEmployee) {
    //     getUserInput();

    // } else {
    //     console.log("Thank you foy using my Engine-Employee-Template!");
    // }
};

async function internRole(data) {
    const { name, id, email } = data;
    const res2 = await inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What is Intern's school?"
        },

    ]);
    const { school } = res2;

    // CREATING NEW Intern 
    const newIntern = new Intern(name, id, email, school);

    return newIntern;

    // if (addNewEmployee) {
    //     getUserInput();

    // } else {
    //     console.log("Thank you foy using my Engine-Employee-Template!");
    // }
}



module.exports = { askBasic, managerRole, internRole, engineerRole, roleChosen };
