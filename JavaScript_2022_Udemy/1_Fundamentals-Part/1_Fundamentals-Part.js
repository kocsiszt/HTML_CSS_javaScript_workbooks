"use strict";

/* const zoliArray = [
  "Zoltan",
  "Kocsis",
  2093 - 1988,
  "programmer",
  ["Ádi", "Jocó", "Roli"],
  "fasz",
  "buzi"
]; */
/* 
const types = [];

for (let i = 0; i < zoliArray.length; i++) {
  console.log(zoliArray[i], typeof zoliArray[i]);

  types.push(typeof zoliArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020, 1988];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}

console.log(ages);
 */
/* console.log("##########Continoue##########");

for (let i = 0; i < zoliArray.length; i++) {
  if (typeof zoliArray[i] !== "string") continue;
  console.log(zoliArray[i], typeof zoliArray[i]);
}
console.log("##########Break##########");

for (let i = 0; i < zoliArray.length; i++) {
  if (typeof zoliArray[i] === "number") break;
  console.log(zoliArray[i], typeof zoliArray[i]);
} */

/* const zoliArray = [
  "Zoltan",
  "Kocsis",
  2093 - 1988,
  "programmer",
  ["Ádi", "Jocó", "Roli"]
];

for (let i = zoliArray.length - 1; i >= 0; i--) {
  console.log(i, zoliArray[i]);
}

for (let excercise = 1; excercise <= 4; excercise++) {
  console.log(excercise, `------Starting Excercise ${excercise}------`);

  for (let rep = 1; rep <= 4; rep++) {
    console.log(`Excercise ${excercise} lifting right repetition ${rep}`);
  }
}
 */

/* for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
} */

/* let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
} */

/* let dice = Math.floor(Math.random() * 6) + 1;
/* console.log(dice);
 */
/* while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.floor(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end......`);
  }
} */

/* Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK � */

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
  let sum = 0;
  for(let i = 0; i)
}


