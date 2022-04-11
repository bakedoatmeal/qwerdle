import React from 'react'
import './Letter.css'

const Letter = ({letter, buttonInteraction, status}) => {
  let className = 'Letter';
  className = className + ` ${status}`;
  return (
    <button className={className} onClick={()=> buttonInteraction(letter.toLowerCase())}>
      {letter}
    </button>
  )
}

export default Letter;