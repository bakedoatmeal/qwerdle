import React from 'react';
import './Word.css';
import Tile from '../Tile/Tile';
import {wordDict} from '../helpers/helpers';

const Word = ({size, guess, wordStatus = 0, letterStatus, keyword }) => {

  const word = guess.map((letter, index) => {
    if (wordStatus === 0) {
      return (
        <Tile letter={letter} key={index} />
      )
    } else if (wordStatus === 1) {
        // get dict of letters with status for each letter
        const letterDict = wordDict(guess, keyword);
        return (
        <Tile status={letterDict[letter] === 0 ? 'grey' : letterDict[letter] === 1 ? 'yellow' : letterDict[letter] === 2 ? 'green' : ''} letter={letter} key={index} />
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