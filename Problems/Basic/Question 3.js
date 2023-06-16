/*Create a factory function that generates objects representing cars with the following properties: 
make, model, year, and color. Then, using an array method, create a new array that contains only the cars that are red. 
Finally, use the forEach() method to log the make and model of each red car to the console.*/

//factory function for cars
const carFactory = (make, model, year, color) => {
  return {make, model, year, color};
};

const cars = [
  carFactory('Toyota', 'Corolla', 2018, 'Red'),
  carFactory('Ford', 'Mustang', 2015, 'Blue'),
  carFactory('Chevrolet', 'Camaro', 2020, 'Red'),
  carFactory('Honda', 'Civic', 2019, 'Black'),
  carFactory('Tesla', 'Model S', 2022, 'Red')
];

const redCars = cars.filter(car => car.color === 'Red')
redCars.forEach(car => {
  console.log(car.make + ' ' + car.model);
});
