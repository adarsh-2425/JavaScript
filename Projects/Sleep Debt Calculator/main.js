//Sleep Debt calculator
//username
let user = '' || 'User';


//sleep for each day of the week
const getSleepHours = day => {
    switch (day) {
        case 'sunday':
                return 8;
                break;
        case 'monday':
                return 7;
                break;
        case 'tuesday':
                return 8;
                break;
        case 'wednesday':
                return 8;
                break;
        case 'thursday':
                return 8;
                break;
        case 'friday':
                return 8;
                break;
        case 'saturday':
                return 8;
                break;
    }
}

//total actual sleep hours
const getActualSleepHours = () => {
    return getSleepHours('sunday') + 
            getSleepHours('monday') + 
            getSleepHours('tuesday') + 
            getSleepHours('wednesday') + 
            getSleepHours('thursday') + 
            getSleepHours('saturday');
}

//total ideal sleep hours
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

//Calculating sleep debt
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
    let overtime = actualSleepHours-idealSleepHours;
    let undertime = idealSleepHours - actualSleepHours;
    
    //result
if (actualSleepHours === idealSleepHours)
    console.log(`${user} got the perfect amount of sleep.`);
else if (actualSleepHours >= idealSleepHours)
    console.log(`${user} got more sleep than needed. You should reduce your hours of sleep by ${overtime} hours this wek.` );
else
    console.log(`${user} should get some rest. You should get an extra sleep time of ${undertime} hours this week.`);
}
//execution starts
calculateSleepDebt();

