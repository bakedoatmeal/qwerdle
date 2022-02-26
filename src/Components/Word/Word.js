import React from 'react';
import './Word.css';
import Tile from '../Tile/Tile'

const Word = ({size, guess}) => {
  
  const word2 = []
  for (let i = 0; i < size; i = i + 1) {
    word2.push(<Tile color="" letter={guess[i]} key={i}/>)
  }

  const word = guess.map((letter, index) => {
    return (
      <Tile color="" letter={letter} key={index}/>
    )
  });

  return (
    <div className='Word'>
      {word}
    </div>
  )
}

export default Word;