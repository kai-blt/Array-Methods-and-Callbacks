import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const finalsInfo = fifaData.filter(data => (data['Year'] === 2014 && data['Stage'] === 'Final'));

//Use Math.sign() to determine if the result is positive or negative. If 1 home won, else away won!
const finalsWinner = finalsInfo.map(data => Math.sign(data['Home Team Goals'] - data['Away Team Goals']) === 1 ? data['Home Team Name'] : data['Away Team Name']);

let a = finalsInfo[0]['Home Team Name'];
let b = finalsInfo[0]['Away Team Name'];
let c = finalsInfo[0]['Home Team Goals'];
let d = finalsInfo[0]['Away Team Goals'];
let e = finalsWinner[0];

console.log(finalsInfo);
console.log('Home Team Name: ' + a);
console.log('Away Team Name: ' + b);
console.log('Home Team Goals: ' + c);
console.log('Away Team Goals: ' + d);
console.log('Winner of the 2014 cup final: ' + e);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let arr = data.filter(data => data['Stage'] === 'Final');
    return arr;
};
console.table(getFinals(fifaData));





/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let arr = callback;
    let years = arr.map(item => item['Year']);
    return years;
}
console.log('Finals Years: ' + getYears(getFinals(fifaData)));


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let arr = callback;
    let winners = arr.map(item => Math.sign(item['Home Team Goals'] - item['Away Team Goals']) === 1 ? item['Home Team Name'] : item['Away Team Name']);
    return winners;
};
console.log('Winners of each final: ' + getWinners(getFinals(fifaData)));



/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
    let arr = callback1;
    let arr2 = callback2;
    console.log(arr);
    console.log(arr2);
    return arr.forEach((item, index) => console.log(`In ${arr2[index]}, ${item} won the world cup!`));
};
getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));




/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let arr1 = data.map(item => item['Home Team Goals']);
    let homeGoals = arr1.reduce((total, accumulator) => total + accumulator) / arr1.length;
    let arr2 = data.map(item => item['Away Team Goals']);
    let awayGoals = arr2.reduce((total, accumulator) => total + accumulator) / arr2.length;
    return `Average goals for home team: ${homeGoals}, away team: ${awayGoals}`
};
console.log(getAverageGoals(fifaData));






/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
