// TODO: Write code to define and export the Employee class
// employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // gets name
    getName () {
        return this.name;
    }

    // gets ID
    getId () {
        return this.id;
    }   

    // gets email
    getEmail () {
        return this.email;
    }

    // returning employee type 
    getRole () {
        return 'Employee'; 
    }
};


module.exports = Employee; 
