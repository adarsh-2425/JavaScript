/*"Suppose you have n balloons, some colored amber and some colored brass. You want to color every balloon to the same color, either amber or brass,
in the most efficient way possible. Write a JavaScript function that takes an array of n balloons represented by the letters 'a' for amber and 'b' for brass, 
and returns the minimum number of balloons that need to be recolored to achieve a uniform color. The function should have a time complexity of O(n), 
where n is the number of balloons, and should use constant space (i.e., no additional arrays or objects should be used). */

const getMinimumColors = (balloons) => {
    let a = 0;
    let b = 0;
    
    for(let i = 0; i < balloons.length; i++) {
        if(balloons[i] === 'a') {
            a++;
        } else {
            b++;
        }
    }
    
    if(a > b) {
        return b;
    } else {
        return a;
    }
}

const balloons = 'baaba';
const result = getMinimumColors(balloons);
console.log(result);
