import React from 'react';
import './Word.css';
import Tile from '../Tile/Tile'

const Word = ({size, guess}) => {
  
  const word = []
  for (let i = 0; i < size; i = i + 1) {
    word.push(<Tile color="" letter={guess[i]} key={i}/>)
  }

  return (
    <div className='Word'>
      {word}
    </div>
  )
}

export default Word;