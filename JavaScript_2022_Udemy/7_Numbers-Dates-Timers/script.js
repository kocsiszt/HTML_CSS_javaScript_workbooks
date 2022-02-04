'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2022-01-26T09:15:04.904Z',
    '2022-01-27T10:17:24.185Z',
    '2022-01-28T14:11:59.604Z',
    '2022-01-29T17:01:17.194Z',
    '2022-01-30T13:36:17.929Z',
    '2022-01-31T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2021-01-29T14:43:26.374Z',
    '2021-01-30T18:49:59.371Z',
    '2021-01-31T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  /* else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } */
  return new Intl.DateTimeFormat(locale).format(date);
};

console.log('*******Formatted currency*******');
const formatCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency //'USD'
  }).format(value);
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale)

    const formadtteMovement = formatCurr(mov, acc.locale, acc.currency);



    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formadtteMovement}</div> //${mov.toFixed(2)}
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);  //${acc.balance.toFixed(2)}€
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = labelBalance.textContent = formatCurr(incomes, acc.locale, acc.currency); //`${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = labelBalance.textContent = formatCurr(Math.abs(out), acc.locale, acc.currency); //`${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = labelBalance.textContent = formatCurr(interest, acc.locale, acc.currency); //`${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    // In each all, print the remining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // Decrease 1s


    // When 0 seconds, stop timer log out to user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Login to get started`;
      containerApp.style.opacity = 0;
    }
    // time = time -1
    time--;
  }

  // Set timer every second
  let time = 120;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAke always logged in
/* currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100; */

// Experementing API
// http://www.lingoes.net/en/translator/langcode.htm
/* const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',  //numeric
  year: 'numeric', //2-digit
  weekday: 'long'     //short, narrow
}; */

/* const locale = navigator.language;  // a böngészőből olvassuk ki a nyelvet
console.log(locale); */

//labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now); // locale helyett hu-HU
//labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now); // locale helyett hu-HU



btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;

    // Create current Date and time

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',  //numeric
      year: 'numeric', //2-digit
      weekday: 'long'     //short, narrow
    };

    const locale = navigator.language;  // a böngészőből olvassuk ki a nyelvet
    console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now); // locale helyett hu-HU





    /*     const day = `${now.getDate()}`.padStart(2, 0);
        const moth = `${now.getMonth() + 1}`.padStart(2, 0);
        const year = now.getFullYear();
        const hour = `${now.getHours()}`.padStart(2, 0);
        const min = `${now.getMinutes()}`.padStart(2, 0);
    
        labelDate.textContent = `${day}/${moth}/${year}/${hour}:${min}`; */

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {



      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log('*******Lectures*******');
console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number(23));
console.log(+'23');

// My code
console.log('100' + '1');
console.log('100' - '1');

// Parsing
console.log('*******Parsing*******');
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('xp30px', 10));
console.log(Number.parseInt('35xp30px'), 10);

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

// Checking if the value is not a number NaN
console.log('*******NaN*******');
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0));

// Checking if value is a number
console.log('*******Number*******');
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger('23'));
console.log(Number.isInteger(20 / 5));

//SQRT
console.log('*******Sqrt  *******');
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log('*******MAX*******');
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 1111, 2));

console.log('*******MIN*******');
console.log(Math.min(5, 18, '23px', 1111, 2));

console.log('*******PI*******');
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

console.log('*******Between*******');
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(7, 20));

console.log('*******Rounding integers*******');
console.log(Math.trunc(23.3));
console.log(Math.round(23.8));
console.log(Math.floor(23.3));
console.log(Math.ceil(23.3));
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));
console.log(Math.round(-23.3));

console.log('*******toFixed always String******');
console.log((2.7).toFixed(0));
console.log((2.789).toFixed(2));
console.log((2.7894).toFixed(3));
console.log(+(2.789).toFixed(3)); // Here is not a string here is a number 

console.log('*******Remainder Operator*******');
console.log(10 % 2);
console.log(7 % 2);
console.log(9 % 5);

console.log('*******isEven*******');
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(5541));
console.log(isEven(554));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

console.log('*******bigInt*******');
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(9846524897512365789425896321478522215n);
console.log(BigInt(9846524897512365789425896321478522215)); // I dont know why is it different as the first but it shold be the same
console.log(BigInt(9846524897512365789425896321478522215));


console.log('*******Operation*******');
console.log(10000n + 10000n);
console.log(3548965481265487236352415896351245n * 100000000n);

const huge = 20154698745123554n;
const num = 23;
console.log(huge * BigInt(num));
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);

console.log(huge + ' is REALLY big!!!');

// Divisiions
console.log('*******Divisions*******');
console.log(11n / 3n);
console.log(10 / 3);

console.log('*******Create a date*******');




console.log(new Date('Fri Jan 28 2022 21:00:56'));
console.log(new Date('July 9, 1988'));
console.log(account1.movementsDates[0]);
console.log(new Date(2088, 8, 9, 12, 40, 35));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

const future = new Date(2088, 6, 9, 12, 40, 35);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getTimezoneOffset());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
let varDate = future.getTime();

const dateNow = new Date(varDate);
console.log(dateNow);

let dateNNow = Date.now();
let dateMOxt = new Date(dateNow);
console.log('*******TEST*******');
console.log(dateMOxt);

console.log('*******Work with dates*******');
const future1 = new Date(2088, 6, 9, 12, 40, 35);
console.log(Number(future));

const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)); // 1 másodperc 1000 millisec *1 perc 60 másodperc * 1 óra 6 perc* 1 nap 24 óra
const day1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4, 15, 15));
//console.log(Math.round(day1));
console.log(day1);

console.log('*******Fomat regular numbers*******');
const num2 = 3884764.23;

const options2 = {
  style: 'currency',  //unit/percent/currency
  unit: 'celsius', //mile-per-hour
  currency: 'EUR',
  //useGrouping: false, //egybe írja ki megint a számot
};

console.log('US: ', new Intl.NumberFormat('en-US', options2).format(num2));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num2));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options2).format(num2));
console.log('Hungary: ', new Intl.NumberFormat('hu-HU', options2).format(num2));
console.log('BrowserLeanguage: ', new Intl.NumberFormat(navigator.language).format(num2));


//Timers, setTimeout
console.log('*******Timers, setTimeout*******');

const ingredients = ['olives', 'spinach'];

//setTimeout(() => console.log('Here is your Pizza!'), 3000);
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza wiht the ingredients ${ing1} and ${ing2}.`), 3000, ...ingredients);
console.log('Waiting...');

if (ingredients.includes('olives')) clearTimeout(pizzaTimer);


// setInterval
const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

/* console.log('*******setInterval*******');
setInterval(function () {
  const now = new Date();
  const locale2 = navigator.language;
  //console.log(now.getHours(), now.getMinutes(), now.getSeconds());
  //console.log(`${now.getUTCHours() + 1}:${now.getUTCMinutes()}.${now.getUTCSeconds()}`);
  console.log(new Intl.DateTimeFormat(locale2, options).format(now));
}, 1000) */



/* const locale = navigator.language;  // a böngészőből olvassuk ki a nyelvet
console.log(locale);
labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now); // locale helyett hu-HU */