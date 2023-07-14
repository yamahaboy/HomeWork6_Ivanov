//https://www.codewars.com/kata/sum-of-positive
const calcPositiveNumbers = (array) => {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    } else {
      array[i];
    }
  }

  return sum;
};
const init = () => {
  const array = [1, -4, 7, 12];

  let result = calcPositiveNumbers(array);

  console.log(`Default array: ${array} => Sum of positive numbers: ${result}`)
};

init();
