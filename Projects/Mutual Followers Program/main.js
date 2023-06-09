// mutual followers program
const bobsFollowers = ['Roy', 'Moss', 'Jen', 'Richmond'];
const tinasFollowers = ['Jen', 'Roy', 'Raj'];
const mutualFollowers= [];

//iteration to find mutual followers
//using nested loop for iteration
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

console.log(mutualFollowers);
