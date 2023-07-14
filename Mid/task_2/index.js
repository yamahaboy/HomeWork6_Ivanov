//https://www.codewars.com/kata/even-or-odd
const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(evenOrOdd(1))
console.log(evenOrOdd(2))
console.log(evenOrOdd(3))
console.log(evenOrOdd(4))
console.log(evenOrOdd(5))