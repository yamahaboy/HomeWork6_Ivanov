//https://www.codewars.com/kata/57eae20f5500ad98e50002c5
const deleteSpaces = (line) => {
  const newLine = line.split(" ").join("");
  console.log(newLine)
};
const init = () => {
  const phrase = "8 j 8   mBliB8g  imjB8B8  jl  B";
  deleteSpaces(phrase)
};
init();
