//conventional
let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger

//shorthand
let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger
