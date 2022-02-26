import React from 'react';
import './Tile.css';
 
const Tile = ({letter, status = 0}) => {
  let className = 'Tile';
  className += ` ${status}`
  return (
    <div className={className}>
      {letter}
    </div>
  )
}

export default Tile;