import { WORDS} from '../../constants/wordlist';
import { acceptedWords } from '../../constants/acceptedwords';

export function isValidGuess(guess) {
  return (acceptedWords.includes(guess) || WORDS.includes(guess));
}

export function updateLetters(letterStatus, guessArray, keyword) {
  //create a copy of the current letterstatus dictionary
  const updatedDict = {...letterStatus};
  for (let i = 0; i < guessArray.length; i = i + 1) {
    if (keyword.includes(guessArray[i])) {
      if (keyword.indexOf(guessArray[i]) === i) {
        updatedDict[guessArray[i]] = 2;
      } else {
        updatedDict[guessArray[i]] = 1;
      }
    }
  }
  return updatedDict; 
}

export function wordDict(guess, keyword) {
  const letterDict = {}
  for (let i = 0; i < keyword.length; i = i + 1) {
    if (keyword.includes(guess[i])) {
      if (keyword.indexOf(guess[i]) === i) {
        letterDict[guess[i]] = 2
      } else {
        letterDict[guess[i]] = 1
      }
    } else {
      letterDict[guess[i]] = 0
    }
  }
  return letterDict;
}