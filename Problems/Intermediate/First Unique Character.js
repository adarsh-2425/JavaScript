/* Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Write a JavaScript function firstUniqueChar that takes a string as input and returns the index of the first non-repeating character. Use the indexOf method to search for characters in the string.*/

function firstUniqueChar(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return i;
        }
    }
    return -1;
}

const str = 'loveleetcode';

console.log(firstUniqueChar(str)) // Output: 2;
