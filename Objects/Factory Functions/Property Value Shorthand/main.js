//conventional
const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};

//new ES6 shorthand
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
