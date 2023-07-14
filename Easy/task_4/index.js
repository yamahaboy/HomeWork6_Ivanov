//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
const deleteFirstLast = (word) => {
  const newWord = word.slice(1, -1);
  console.log(`New Word: ${newWord}`);
};
const init = () => {
  const word = "?Hello?";
  deleteFirstLast(word);
};

init();
