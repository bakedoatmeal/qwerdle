import React from 'react';
import './Game.css';
import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';
import { useState, useEffect } from 'react';
import { WORDS} from '../../constants/wordlist';
import { acceptedWords } from '../../constants/acceptedwords';
import {isValidGuess, updateLetters} from '../helpers/helpers'

const Game = () => {

  // setting a random word to guess for testing
  const [keyword, setKeyword] = useState('dodge');
  // track which guess they are at (out of 5)
  const [wordNumber, setWordNumber] = useState(0);
  //letter number
  const [letterNumber, setLetterNumber] = useState(0);
  const [wordStatuses, setWordStatuses] = useState(Array(6).fill(0))
  let wordSize = 5;
  //as they type out letters for a current guess, build the guess string
  const [guesses, setGuesses] = useState(Array(6).fill(Array(5).fill('')));
  //if we hit enter, put old guesses in here
  const [letterStatus, setLetterStatus] = useState({
    'a': 0,
    'b': 0,
    'c': 0, 
    'd': 0, 
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0,
    'o': 0,
    'p': 0,
    'q': 0,
    'r': 0,
    's': 0,
    't': 0,
    'u': 0,
    'v': 0,
    'w': 0,
    'x': 0,
    'y': 0,
    'z': 0,
  });

  useEffect(() => {
    setKeyword(WORDS[Math.floor(Math.random()*WORDS.length)]);
  }, []);

  const buttonInteraction = (letter) => {
    if (letterNumber < wordSize) {
      const newArray = Array(6);
      for (let i = 0; i < 6; i = i + 1) {
        newArray[i] = [...guesses[i]]
        if (i === wordNumber) {
          newArray[i][letterNumber] = letter;
        }
      }

      setGuesses(newArray);
      setLetterNumber(letterNumber + 1);
    } else {
      console.log('Too many letters!');
    }
  }

  const del = () => {
    if (letterNumber > 0) {
      const newArray = Array(6);
      for (let i = 0; i < 6; i = i + 1) {
        newArray[i] = [...guesses[i]]
        if (i === wordNumber) {
          newArray[i][letterNumber - 1] = '';
        }
      }
      setGuesses(newArray);
      setLetterNumber(letterNumber - 1);
    } else {
      console.log('end of word!')
    }
  }

  const wordGuessed = () => {
    if (guesses[wordNumber].join('') === keyword) {
      return true
    }
    return false
  }

  const enter = () => {
    if (letterNumber === wordSize) {
      if (isValidGuess(guesses[wordNumber].join(''))) {
        const tempStatuses = JSON.parse(JSON.stringify(wordStatuses));
        tempStatuses[wordNumber] = 1;
        setWordStatuses(tempStatuses);
        setLetterStatus(updateLetters(letterStatus, guesses[wordNumber], keyword));
        if (wordGuessed()) {
          alert('You won!');
        } else {
          setWordNumber(wordNumber + 1);
          setLetterNumber(0);
        }
      } else {
        console.log('Invalid word!', guesses[wordNumber].join(''));
        console.log(guesses[wordNumber].join(''));
        
      }
    } else {
      console.log('Incomplete guess!');
    }
  }

  return (
    <div className='Game'>
      <p>{keyword}</p>
      <Board guesses={guesses} wordSize={wordSize} wordStatuses={wordStatuses} letterStatus={letterStatus}/>
      <Keyboard buttonInteraction={buttonInteraction} del={del} enter={enter}/>
    </div>
  )

}

export default Game;