import React from 'react';
import './Word.css';
import Tile from '../Tile/Tile';
import {wordArray} from '../helpers/helpers';

const Word = ({size, guess, wordStatus = 0, keyword }) => {

  const word = guess.map((letter, index) => {
    if (wordStatus === 0) {
      return (
        <Tile letter={letter} key={index} />
      )
    } else if (wordStatus === 1) {
        // get dict of letters with status for each letter
        const letterArray = wordArray(guess, keyword);
        return (
        <Tile status={letterArray[index] === 0 ? 'absent' : letterArray[index]} letter={letter} key={index} />
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