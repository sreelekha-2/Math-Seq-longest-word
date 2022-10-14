//1.longest word

const sentence = 'I woke up early  today';
// const sentence = 'I went straight to the beach';
const arr = sentence.split(' ');

let longArr = [];

function longestWord(sentence) {
  let longest = '';
  arr.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    } else if (word.length === longest.length) {
      longArr.push(word);
    }
  });
  longArr.unshift(longest);
  return longArr;
}

console.log(longestWord(sentence));

// with reduce method

const long = arr.reduce((longWord, currentWord) => {
  if (currentWord.length > longWord.length) {
    return currentWord;
  } else {
    return longWord;
  }
}, '');
console.log(long);
