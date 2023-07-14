//https://www.codewars.com/kata/reversed-strings
const reverseWord = (word) => {
  const newWord = word.split("").reverse().join("");
  console.log(`Last word: ${word} => New word: ${newWord}`);
};
const init = () => {
  const word1 = "world";
  const word2 = "word";
  reverseWord(word1);
  reverseWord(word2);
};
init();
