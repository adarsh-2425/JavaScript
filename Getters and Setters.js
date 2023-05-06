const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

//getter = - access properties
//setters - changethem
person.fullName = 'Dwane Johnson';
console.log(person);
