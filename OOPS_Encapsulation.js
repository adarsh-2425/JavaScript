//OOPS
//Encapsulation

//procedural example
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getwage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

//object-oriented example
//encapsulation
let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getwage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getwage();
