import React from 'react';
import Tile from '../Tile/Tile';
import './Board.css';
import Word from '../Word/Word'

const Board = ({guesses, wordSize, wordStatuses, keyword}) => {

  const allGuesses = guesses.map((word, index) => {

    //const copyLetterStatus = {...letterStatus};
    // if (wordStatuses[index] === 0) {
      return (
        <Word size={wordSize} guess={word} key={index} wordStatus={wordStatuses[index]} keyword={keyword}/>
      )
    // } else {
    //   return (
    //     <Word size={wordSize} guess={word} key={index} wordStatus={wordStatuses[index]} letterStatus={copyLetterStatus} keyword={keyword}/>
    //   )
    // }
  })

  return (
    <div className="Board">
      {allGuesses}
    </div>
  )
}

export default Board;