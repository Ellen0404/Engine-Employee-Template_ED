
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`name is ${this.name}`);
    };

    getId() {
        console.log(`id is ${this.id}`);
    };

    getEmail() {

    };

    getRole() {
        return Employee;
    };
}

module.exports = Employee;