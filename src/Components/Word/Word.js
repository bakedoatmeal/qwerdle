import React from 'react';
import './Word.css';
import Tile from '../Tile/Tile'

const Word = ({size, guess, wordStatus = 0, letterStatus }) => {

  const word = guess.map((letter, index) => {
    if (wordStatus === 0) {
      return (
        <Tile letter={letter} key={index} />
      )
    } else if (wordStatus === 1) {
      return (
        <Tile status={letterStatus[letter] === 0 ? 'grey' : letterStatus[letter] === 1 ? 'yellow' : 'green'} letter={letter} key={index}/>
      )
    }
  })

  return (
    <div className='Word'>
      {word}
    </div>
  )
}

export default Word;