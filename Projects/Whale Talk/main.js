const human = 'turpentine and turtles';
let whale = [];

for (let i = 0; i < human.length; i++) {
    switch(human[i]) {
        case 'a':
        case 'i':
        case 'o':
            whale.push(human[i]);
            break;
        case 'e':
        case 'u':
            whale.push(human[i]);
            whale.push(human[i]);
            break;
        case 'y':
            whale.push(human[i]);
    }
};
//join('') concatenates words without comma
console.log(whale.join('')); // uueeieeauuee
