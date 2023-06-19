////importing peoples array and getAdults function from people.js
const { groupBy } = require('./grouping.js');
const { peoples } = require('./people.js');

const gender = groupBy(peoples, 'gender');
console.log(gender);
