'use strict';


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        setTimeout(function () {
            header.style.color = 'blue';
        }, 2000)
    })
})();








/*
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();
console.dir(f);

// Re-assign f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000)


    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3) */



/* document.querySelector('.buy').addEventListener('click', function () {
    setTimeout(function () {
        console.log('A rohadt retkes kurva anyád');
    }, 4000)
})
 */





/* const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker); */




/* (function () {
    console.log('Kura anyád!');
})();

(() => console.log('Kura anyád! arrow'))();
 */

/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function(){},
    book(flightNumber, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNumber}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNumber}, name: ${name}` });
    },
};

lufthansa.book(239, 'Zoltan Kocsis');
lufthansa.book(635, 'Tamas Kocsis');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Do NOT work
//book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 573, 'Mary Cooper');
console.log(swiss);

// Apply method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(flightData);

book.call(swiss, ...flightData);
console.log(flightData);

// Bind

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);


bookEW(23, 'Steven Williams');


const bookEW23 = book.bind(eurowings, 23);
bookEW23('Zoltan Kocsis');
bookEW23('Tamas Kocsis');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

//lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Psrtial aplication

const addTAx = (rate, value) => value + value * rate;
console.log(addTAx(10, 200));

const addVAT = addTAx.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
 */