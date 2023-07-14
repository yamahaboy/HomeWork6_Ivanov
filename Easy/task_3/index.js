//https://www.codewars.com/kata/59f7fc109f0e86d705000043

const divisionBythree = (number) => {
  const arrayOfNumbers = number.split("").map(Number);

  let sum = 0;
  arrayOfNumbers.forEach((value) => {
    sum += value;
  });

  return sum % 3 === 0;
};
const init = () => {
  const value1 = "123";
  const value2 = "8409";
  const value3 = "100853";

  const result1 = divisionBythree(value1);
  console.log(`Divide by 3 or not: ${value1} => ${result1}`);

  const result2 = divisionBythree(value2);
  console.log(`Divide by 3 or not: ${value2} => ${result2}`);

  const result3 = divisionBythree(value3);
  console.log(`Divide by 3 or not: ${value3} => ${result3}`);
};
init();
