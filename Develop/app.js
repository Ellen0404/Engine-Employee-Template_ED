const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { askBasic, roleChosen } = require("./lib/questions");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


async function start() {
    const { name, id, email, role } = await askBasic();

    return roleChosen({ name, id, email, role });



}
async function init() {
    try {

        let anotoher = true;
        const allEmployees = [];
        while (anotoher) {
            const collectNewEmployee = await start();
            allEmployees.push(collectNewEmployee);
            const res1 = await inquirer.prompt(
                [
                    {
                        type: "confirm",
                        name: "addNewEmployee",
                        message: "Do you want to add another employee?"
                    }]
            );
            // console.log(res1)
            if (!res1.addNewEmployee) {
                anotoher = false;
                console.log("Thank you foy using my Engine-Employee-Template!");
            }
        }

        //CREATE NEW HTML FILE WITH ALL EMPLOYEES
        const html = render(allEmployees);

        // var outputPath = "./output/team.html";

        fs.writeFileSync(outputPath, html, function (err) {
            if (err) {
                throw err;
            }
        });

    } catch (err) {
        console.log(err);
    }
}

init();

