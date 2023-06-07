let raceNumber = Math.floor(Math.random() * 1000);
let regEarly= true;
let rAge = 17;

if (rAge > 18 && regEarly === true) {
  raceNumber += 1000;
}

if (rAge > 18 && regEarly === true) {
  console.log(`You will race at 9:30 am. Your Register Number is ${raceNumber}.`);
} else if (rAge > 18 && regEarly === false) {
  console.log(`You will race at 11:00 am. Your Register Number is ${raceNumber}.`);
} else if (rAge < 18) {
  console.log(`You will race at 12:30 pm. Your Register Number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}
