import React from 'react';
import './Tile.css';
 
const Tile = ({letter, color}) => {
  return (
    <div className='Tile'>
      {letter}
    </div>
  )
}

export default Tile;