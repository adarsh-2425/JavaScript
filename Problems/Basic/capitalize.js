/*Write a named function capitalize that takes a string as input and returns the string with the first letter capitalized.*/

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalize('lol'));
