let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove last item of array
secretMessage.pop();

//add items to end of array
secretMessage.push('to', 'Program');

//change the word 'easily' to 'right'
let indexOfEasily = secretMessage.indexOf('easily');
if (indexOfEasily != -1) {
    secretMessage.splice(indexOfEasily, 1, 'right');
}

//remove first string of array
secretMessage.shift();

//add 'Programming' as first item to array
secretMessage.unshift('Programming');

//remove 'get', 'right', 'the', 'first', 'time' and replace it with 'know'
let firstIndex = secretMessage.indexOf('get');
if (firstIndex != -1) {
    secretMessage.splice(firstIndex, 5, 'know');
}

console.log(secretMessage.join());
