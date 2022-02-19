import React from 'react';
import './Game.css';
import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';
import { useState } from 'react';

const Game = () => {

  let keyword = 'dodge';
  const [guesses, setGuesses] = useState('');
  const [guessed, setGuessed] = useState([]);
  const [currGuess, setCurrGuess] = useState('');

  const buttonInteraction = (letter) => {
    setGuesses(guesses + letter)
    console.log(letter)
  }

  const del = () => {
    setGuesses(guesses.slice(0, -1))
  }

  return (
    <>
      <Board guesses={guesses}/>
      <Keyboard buttonInteraction={buttonInteraction} del={del}/>
    </>
  )

}

export default Game;