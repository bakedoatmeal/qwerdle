import { WORDS} from '../../constants/wordlist';
import { acceptedWords } from '../../constants/acceptedwords';

export function isValidGuess(guess) {
  return (acceptedWords.includes(guess) || WORDS.includes(guess));
}

export function getKeyword() {
  let keyword = WORDS[Math.floor(Math.random()*WORDS.length)];

  while (!/(.).*\1/.test(keyword) === false) {
    keyword = WORDS[Math.floor(Math.random()*WORDS.length)];
  }
  console.log(keyword);
  return keyword;
}

export function updateLetters(letterStatus, guessArray, keyword) {
  //create a copy of the current letterstatus dictionary
  const updatedDict = {...letterStatus};
  for (let i = 0; i < guessArray.length; i = i + 1) {
    if (keyword.includes(guessArray[i])) {
      if (keyword.indexOf(guessArray[i]) === i) {
        updatedDict[guessArray[i]] = 2;
      } else {
        if (updatedDict[guessArray[i]] !== 2) {
          updatedDict[guessArray[i]] = 1;
        }
      }
    } else {
        if (updatedDict[guessArray[i]] !== 2 && updatedDict[guessArray[i]] !== 1) {
          updatedDict[guessArray[i]] = 0;
        }
    }
  }
  return updatedDict; 
}

export function wordArray(guess, keyword) {
  const letterArray = Array(keyword.length).fill(0)
  for (let i = 0; i < keyword.length; i = i + 1) {
    if (keyword.includes(guess[i])) {
      if (keyword[i] === guess[i]) {
        letterArray[i] = 2
      } else {
        letterArray[i] = 1
      }
    }
  }
  return letterArray;
}