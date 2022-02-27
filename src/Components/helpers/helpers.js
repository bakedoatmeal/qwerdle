import { WORDS} from '../../constants/wordlist';
import { acceptedWords } from '../../constants/acceptedwords';

export function isValidGuess(guess) {
  return (acceptedWords.includes(guess) || WORDS.includes(guess));
}

export function updateLetters() {

}