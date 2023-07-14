//https://www.codewars.com/kata/find-the-duplicated-number-in-a-consecutive-unsorted-list
const findDublicate = (numbers) => {
  let result = [];
  let set = new Set();

  for (i = 0; i < numbers.length; i++) {
    if (set.has(numbers[i])) {
      result.push(numbers[i]);
    } else {
      set.add(numbers[i]);
    }
  }

  return result;
};
const init = () => {
  const array1 = [3, 2, 5, 1, 3, 4];
  const array2 = [3, 2, 5, 1, 3, 4, 2, 4, 3];

  let dublicate1 = findDublicate(array1);
  let dublicate2 = findDublicate(array2);
  console.log(`Array: ${array1} => Dublicate: ${dublicate1}`);
  console.log(`Array: ${array2} => Dublicate: ${dublicate2}`);
};
init();
