// 6
// https://stackoverflow.com/questions/65361639/codility-commonprimedivisors-time-complexity
/* A prime is a positive integer X that has exactly two distinct divisors: 1 and X. The first few prime integers are 2, 3, 5, 7, 11 and 13.
A prime D is called a prime divisor of a positive integer P if there exists a positive integer K such that D * K = P. For example,
 2 and 5 are prime divisors of 20.
You are given two positive integers N and M. The goal is to check whether the sets of prime divisors of integers N and M are exactly the same. */




// 7
// https://www.geeksforgeeks.org/program-for-sum-of-the-digits-of-a-given-number/
// Program for Sum of the digits of a given number
var sum = 0;
function sumOfDigitNonRecursive(number) {
    while (number != 0) {
        sum += Math.abs(number) % 10;
        number = Math.floor(Math.abs(number) / 10);
    }
    return sum;
}

console.log(sumOfDigitNonRecursive(14));



