import React from 'react';
import './Game.css';
import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';
import { useState, useEffect } from 'react';
import { getKeyword, isValidGuess, updateLetters } from '../helpers/helpers'

const Game = () => {

  // setting a random word to guess for testing
  const [keyword, setKeyword] = useState('dodge');
  // track which guess they are at (out of 5)
  const [wordNumber, setWordNumber] = useState(0);
  // track which letter they are at 
  const [letterNumber, setLetterNumber] = useState(0);
  // track the status of each word 
  const [wordStatuses, setWordStatuses] = useState(Array(6).fill(0));
  let wordSize = 5;
  //as they type out letters for a current guess, build the guess string
  const [guesses, setGuesses] = useState(Array(6).fill(Array(5).fill('')));
  
  // track the status of each letter - at the start, none have been used
  const letterDict = {};
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (const key of alphabet) {
    // TODO: Change letters to descriptive strings
    letterDict[key] = 3;
  }

  const [letterStatus, setLetterStatus] = useState(letterDict);

  // set keyword to guess when the game loads
  useEffect(() => {
    setKeyword(getKeyword());
  }, []);

  // called when a letter on keyboard is clicked
  const buttonInteraction = (letter) => {
    if (letterNumber < wordSize) {
      const newArray = Array(6);

      // copy values of the array into new array (deep copy) and include new guess
      for (let i = 0; i < 6; i = i + 1) {
        newArray[i] = [...guesses[i]]
        if (i === wordNumber) {
          newArray[i][letterNumber] = letter;
        }
      }

      // set guesses to new letter array
      setGuesses(newArray);
      setLetterNumber(letterNumber + 1);
    } else {
      console.log('Too many letters!');
    }
  }

  // delete last letter guessed
  const del = () => {
    if (letterNumber > 0) {
      // make a copy of the array and remove last letter guessed
      const newArray = Array(6);
      for (let i = 0; i < 6; i = i + 1) {
        newArray[i] = [...guesses[i]]
        if (i === wordNumber) {
          newArray[i][letterNumber - 1] = '';
        }
      }
      
      //set guesses to the new array
      setGuesses(newArray);
      setLetterNumber(letterNumber - 1);
    } else {
      // can't delete if we already have no letters in current word
      // TODO: add shake?
      console.log('end of word!')
    }
  }

  // returns true if the keyword has been guessed
  const wordGuessed = () => {
    if (guesses[wordNumber].join('') === keyword) {
      return true
    }
    return false
  }

  // runs when player presses the enter button to submit a guess
  const enter = () => {
    // if correct numbers of letters guessed
    if (letterNumber === wordSize) {
      // if guess is a valid word from word bank
      if (isValidGuess(guesses[wordNumber].join(''))) {
        // change the status of the word to 1 for guessed 
        const tempStatuses = JSON.parse(JSON.stringify(wordStatuses));
        tempStatuses[wordNumber] = 1;
        setWordStatuses(tempStatuses);

        // change letter statuses - unused, guessed, correct letter, incorrect place
        setLetterStatus(updateLetters(letterStatus, guesses[wordNumber], keyword));
        
        // check win condition 
        if (wordGuessed()) {
          alert('You won!');
        } else {
          setWordNumber(wordNumber + 1);
          setLetterNumber(0);
        }
      } else {
        console.log('Invalid word!', guesses[wordNumber].join(''));
        console.log(guesses[wordNumber].join(''));
        alert('Invalid word!');
        
      }
    } else {
      console.log('Incomplete guess!');
      alert('Incomplete guess!');
    }
  }

  const keyDownHandler = (event) => { 
    if (event.key === 'Enter') {
      enter();
    } else if (event.key === 'Backspace') {
      del();
    } else if (event.key.length === 1 && (/[a-zA-Z]/).test(event.key)) {
      buttonInteraction(event.key);
    }
  }

  // Add event handler to document for keypresses
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler)
  })

  return (
    <div className='Game'>
      <Board guesses={guesses} wordSize={wordSize} wordStatuses={wordStatuses} keyword={keyword}/>
      <Keyboard buttonInteraction={buttonInteraction} del={del} enter={enter} letterStatus={letterStatus}/>
    </div>
  )

}

export default Game;