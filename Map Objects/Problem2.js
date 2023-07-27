/*Write a function that takes an array of objects as input, where each object contains a name property and a score property. 
The function should return a Map object that contains the average score for each name in the input array.*/

function averageScore(arr) {
    const scoreMap = new Map();
    const countMap = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].name;
        const score = arr[i].score;
        
        if(scoreMap.has(name)) {
            scoreMap.set(name, scoreMap.get(name) + score);
            countMap.set(name, countMap.get(name) + 1);
        } else {
            scoreMap.set(name, score);
            countMap.set(name, 1);
        }
    }
    
    const result = new Map();
    
    scoreMap.forEach((value, key) => {
        const count = countMap.get(key);
        const average = value / count;
        result.set(key, average);
    });
    
    return result;
}

const scores = [
  { name: 'Alice', score: 80 },
  { name: 'Bob', score: 90 },
  { name: 'Alice', score: 95 },
  { name: 'Charlie', score: 85 },
  { name: 'Bob', score: 75 },
  { name: 'Charlie', score: 90 }
];

//calling function
const result = averageScore(scores);
console.log(result);
