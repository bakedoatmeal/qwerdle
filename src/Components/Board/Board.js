import React from 'react';
import Tile from '../Tile/Tile';
import './Board.css';
import Word from '../Word/Word'

const Board = ({guesses, wordSize, wordStatuses, letterStatus}) => {

  const allGuesses = guesses.map((word, index) => {
    const copyLetterStatus = {...letterStatus};
    if (wordStatuses[index] === 0) {
      return (
        <Word size={wordSize} guess={word} key={index} wordStatus={wordStatuses[index]} letterStatus={letterStatus}/>
      )
    } else {
      return (
        <Word size={wordSize} guess={word} key={index} wordStatus={wordStatuses[index]} letterStatus={copyLetterStatus}/>
      )
    }
  })

  return (
    <div className="Board">
      {allGuesses}
    </div>
  )
}

export default Board;