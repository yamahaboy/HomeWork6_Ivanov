//https://www.codewars.com/kata/century-from-year
const century = (year) => {
  return Math.ceil(year / 100);
};

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
