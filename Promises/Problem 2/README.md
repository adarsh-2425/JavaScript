# Addition Operation
Assume you have two modules: calculator.js and math.js. The math.js module exports a function addition that takes in two numbers and returns their sum.    
The calculator.js module imports the addition function from math.js and uses it to add two numbers.     
However, since user input is unpredictable, the app.js module uses a promise to handle any errors that may arise during the addition process.    
