alert('Youre clean af!');

/* var phrase = 'To be or not to be';

document.write( phrase);
document.write( phrase);
phrase = 'oh yeah';
document.write( phrase);
document.write( phrase);
// you see how when switching the phrase halfway through it allowed it to be changed but the first 2 phrases were ok */

/*var name = window.prompt('What is your name?');
var age = window.prompt('How old are you?');
document.write("Hey " + name + ', How are you today? Do you like being ' + age + ' years old?')*/

// Create a program that uses variables for years, and then calculate and displays an approximate age in months, days, hours, and seconds. For example, a person 1-year-old is 12 months old, 365 days old, etc.
function calculateAge(years) {
    const monthsPerYear = 12;
    const daysPerYear = 365;
    const hoursPerDay = 24;
    const secondsPerHour = 60 * 60;

    //calculate the age in months
    const months = years * monthsPerYear;

    //calulate the age in days
    const days = years * daysPerYear;

    //calculate the age in hours
    const hours = days * hoursPerDay;

    //calculate the age in seconds
    const seconds = hours * secondsPerHour;

    //return the age in months,days, hours, and seconds
    return {
        months: months,
        days: days,
        hours: hours,
        seconds: seconds,
    };
}

//get users age in years 
const years = prompt('Enter your age in years:');

//calculate the age in months,days,hours,and seconds

const age = calculateAge(years);

//display the age in months, days, hours ,and seconds 
console.log("Your age in months is:", age.months);
console.log("Your age in days is:", age.days);
console.log("Your age in hours is:", age.hours);
console.log("Your age in seconds is:", age.seconds);

