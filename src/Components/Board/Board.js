import React from 'react';
import Tile from '../Tile/Tile';
import './Board.css';
import Word from '../Word/Word'

const Board = ({guesses}) => {

  return (
    <div className="Board">
      <Word size="5" guess={guesses}/>
    </div>
  )
}

export default Board;