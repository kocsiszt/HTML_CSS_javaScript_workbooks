'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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


const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'widtdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//displayMovements(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ')
      .map(name => name[0]).join('');
  })


  /*   const userName = user.toLowerCase().split(' ')
      .map(name => name[0]).join();
    /* (function (name) { //.map(name => name[0].join();)
      return name[0];
    }).join('');
    return userName */
};
createUsernames(accounts);
//console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc)
}


console.log('********LECTURES*******');
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
}
//calcDisplayBalance (account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};


/* const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}EUR`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov + 0);
  labelSumOut.textContent = `${Math.abs(out)}EUR`;

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate / 100).filter((int, i, arr) => {
    return int >= 1;
  }).reduce((acc, int) => acc + int, 0));
  labelSumInterest.textContent = `${interest}EUR`;
}; */
//calcDisplaySummary(account1.movements);



//const user = 'Steven Thomas Williams';
//console.log(userName);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementsUSDarr = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDarr);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);


const movementsDescriptions = movements.map((mov, i) =>
  `Movement ${i + 1}: You deposited ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`

  /*   if (mov > 0) {
      return `Movement ${i + 1}: You deposited ${mov}`;
    } else {
      return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
    } */
);

console.log(movementsDescriptions);



const deposit = movements.filter(function (mov) {
  return mov > 0;
})

console.log(movements);
console.log(deposit);

const depositFor = []
for (const movv of movements) if (movv > 0) depositFor.push(movv)
console.log(depositFor);


const withdravals = [];
for (const mov of movements) if (mov < 0) withdravals.push(mov);
console.log(withdravals);


const depostiDravals = movements.filter(function (mov) {
  return mov < 0;
})

console.log(depostiDravals);

const depostiDravalsArr = movements.filter(mov => mov < 0);
console.log(depostiDravalsArr);


const depdrav2 = [];
for (const mov of movements) if (mov < 0) depdrav2.push(mov);
console.log(depdrav2);

console.log('*********REDUCE**********');
console.log(movements);

const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
}, 0);
console.log(balance);

const balanceARR = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balanceARR);

let balanceReduce = 0;
for (const mov of movements) balanceReduce += mov;
console.log(balanceReduce);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov)
    return acc;
  else
    return mov;
}, movements[0]);
console.log(max);

const firtsWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firtsWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(accounts);
console.log(account);


// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  //console.log('LOGIN');

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display a UI and Welcome message
    //console.log('LOGIN2');
    labelWelcome.textContent = `Welcome backk, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount)


  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  //console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';


  if (amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    //console.log('Transfer valid');

    // Doing the transfer 
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount)
  }
  inputLoanAmount.value = '';

})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  //console.log('Delete');

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    // .indexOf(230)

    // delete account
    accounts.splice(index, 1);

    // Hide IU
    containerApp.style.opacity = 0;
    //account.splice(index, i);
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Equality
console.log('*******SOME*******');
console.log(movements);
console.log(movements.includes(-130));

// Condition olyan mintha csak any lenne
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 1300);
console.log(anyDeposits);


// Every
console.log('********Every********');
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Seaprate callback
console.log('********Separate Callback********');

const depositSepCall = mov => mov > 0;
console.log(movements.some(depositSepCall));
console.log(movements.every(depositSepCall));
console.log(movements.filter(depositSepCall));

console.log('********Flat and flat.Map********');
const arr = [[1, 2, 3], [4, 5, 6], [7, 8]];
const arrFlat = arr.flat();
console.log(arr.flat());
console.log(arrFlat);

const arrDeep = [[[1, 2], 3], [4, [5, 6]], [7, 8]];
console.log(arrDeep.flat(2));


console.log('********Flat********');
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const overalBalance2 = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

console.log('********flatMap********');
const overalBalance3 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance3);

console.log('********Sorting Arrays********');
// Strings
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners);
console.log(owners.sort()); //Ez mutatedeli az owners t
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort()); // A számokat is ABC sorrendben teszi

// return < 0, A, B
// return > 0, B, A

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);


// Descending
/* movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
}); */
console.log('********Ugyan az mint a fenti csak rövidebben********');
movements.sort((a, b) => a - b);

console.log(movements);

const owners2 = ['Zoli', 'Adél', 'Edina'];
console.log(owners2);

owners2.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(owners2);

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array([1, 2, 3, 4, 5, 6, 7]));

const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));
x.fill(2, 3, 5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

// Array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);


const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);


labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')));
  console.log(movementsUI);
});

console.log('********Before Coding Challenge********');
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 1000).length;
console.log(numDeposits1000);

const numDeposits1000_Reduce = accounts.flatMap(acc => acc.movements).reduce((count, cur) => (cur >= 1000 ? ++count : count), 0) //1 : count
console.log(numDeposits1000_Reduce);

// Prefixed Operator
console.log('*******Prefixed Operator*******');
let a = 10;
console.log(++a);


const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
  //cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
  return sums;
}, { deposits: 0, withdrawals: 0 })

console.log(`Deposit: ${deposits} Withdrawals: ${withdrawals}`);

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1)
  const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title.toLowerCase().split(' ').map(word => expections.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title bot not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
 */
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// Splice
//console.log(arr.splice(2));
arr.splice(-1)
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(' - '));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  //for (const movement of movements) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------FOREACH-----');
/* movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}) */

/*
console.log('------FOREACH2-----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
})

// Set
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR',]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${value}: ${key}`);
})
 */


