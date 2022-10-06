//1.longest word

const sentence = 'I woke up early today';
// const sentence = 'I went straight to the beach';
const arr = sentence.split(' ');
longestWord(sentence);

function longestWord(sentence) {
  let longest = arr[0];
  arr.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
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

//2.math sequence

const seq = [5, 10, 15, 20];
let arithmeticCount = 0;
let geometricCount = 0;

const fst = seq[0];
const sec = seq[1];
const d = sec - fst;
const r = sec / fst;

for (i = 0; i < seq.length; i++) {
  if (seq[i + 1] - seq[i] === d) {
    arithmeticCount++;
  }
  if (seq[i + 1] / seq[i] === r) {
    geometricCount++;
  }
}
if (arithmeticCount === seq.length - 1) {
  console.log('Arithmetic');
} else if (geometricCount === seq.length - 1) {
  console.log('Geometric');
} else {
  console.log('-1');
}
