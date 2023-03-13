'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openinhHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};




const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openinhHours,
  weekdays,



  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],
    this.mainMenu[mainIndex]];
  },

  orderDelivery(obj) {
    console.log(obj);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

console.log('a+very+nice+string'.split('+'));
console.log('Zoltan Kocsis'.split(' '));

const [firstName, lastName] = 'Zoltan Kocsis'.split(' ');
console.log(firstName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//////////////////////////////////////////////////////
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('mr zoltan tamas kocsis');
capitalizeName('jonas schmedtmann');


const message = 'Go to gete 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Zoli'.padStart(20, '+').padEnd(30, '+'));

//Credit card

const maskCreditCar = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCar(157425694));
console.log(maskCreditCar(1574256947895));
console.log(maskCreditCar('156321489874569845245698'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${''}`);
}


/* const airline = 'TAP Air Portugal';
console.log(airline.toUpperCase());
console.log(airline.toLocaleLowerCase());
console.log('Zoli'.toLocaleUpperCase());
console.log('KOCSIS'.toLocaleLowerCase());

//Fix capitalization in name

const passenger = 'zOlTaN' // Zoltan
const passengerLover = passenger.toLowerCase();
const passengerCorrect = passengerLover[0].toUpperCase() + passengerLover.slice(1);
console.log(passengerCorrect);

// Comparing emails

const email = 'olicode1@gmail.com';
const loginEmail = '  Olicode1@gmail.com \n';

const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replace

const priceGB = '365,5£';
console.log(priceGB);
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate'));

// Boolenas
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW AIRbus family');
}

// Practice excercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gum')) {
    console.log('You are NOT allowed to the board!');
  } else {
    console.log('Welcome aboard!');
  }
}
checkBaggage('I have a laptop, some food and knife');
checkBaggage('Socks and camera');
checkBaggage('got some snacks and gum for protection');
 */



/* const plane = 'A320';

console.log(plane[0]);
console.log(airline[5]);
console.log('Zoli'[1]);

console.log(`Hossz: ${airline.length}`);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(8));
console.log(airline.slice(8, 10));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf('P')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1)); */


/* const orderSet = new Set(['Pizza', 'Risotto', 'Fickmick', 'Pizza', 'Galgadot', 'Pizza'])
console.log(orderSet);
console.log(new Set('Zoli'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('SonGoKu'));
console.log(orderSet.add('Garlic Pizza'));
console.log(orderSet.add('Garlic Pizza'));
console.log(orderSet.delete('Risotto'));
console.log(orderSet);

const stadff = ['oli', 'zoli', 'kocsis', 'zoli', 'kocsis'];
const orderStaff = [...new Set(stadff)];
console.log(orderStaff);

console.log(new Set('zoltantamaskocsis').size);

const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'firenze itali');
console.log(rest.set(2, 'lisbon portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 11;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr)); */


/* const question = new Map([['question', 'What is the best programming leanguage in the world?'],
[1, 'C'],
[2, 'Java'],
[3, 'JavaScript'],
['correct', 3],
[true, 'Correct :D'],
[false, 'Try again!']
]);
console.log(question);
console.log(Object.entries(openinhHours));

const hoursMap = new Map(Object.entries(openinhHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answe is ${key}: ${value}`);
}


//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));


// convert map to array

console.log([...question]);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

 */

