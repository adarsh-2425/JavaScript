/*You're tasked with creating a program that generates a random new business idea every day. 
The business idea should consist of a random word from a list of adjectives, a random word from a list of nouns, and a random number between 1 and 10. 
Write a JavaScript program to accomplish this task.*/

const adjectives = ['innovative', 'sustainable', 'eco-friendly', 'disruptive', 'revolutionary', 'inclusive'];
const nouns = ['app', 'platform', 'service', 'product', 'solution', 'tool'];

const businessIdea = () => {
  
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(Math.random() * 10) + 1;
  return `A ${adjective} ${noun} that helps you achieve your goals in ${number} easy steps!`;
};

console.log(businessIdea());
