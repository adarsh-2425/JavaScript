/*Create an object representing a car with the following properties: make, model, year, and engine, which should be a nested object 
representing the car's engine with the properties type, displacement, and horsepower. Use a getter method to calculate and return the 
car's torque based on the engine's displacement and horsepower. Use a setter method to update the car's year.*/

//car object
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2019,
  engine: {
    type: 'Gasoline',
    displacement: 1.8,
    horsepower: 139
  },

  get torque() {
    const {displacement, horsepower} = this.engine;
    const torque = (displacement + horsepower) / 5252;
    return torque;
  },

  set setYear(num) {
    if (typeof num !== 'number') {
      console.log('Enter Valid Year');
    } else {
      this.year = num;
    }
  }
};


console.log(car);
