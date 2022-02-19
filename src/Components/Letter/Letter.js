import React from 'react'
import './Letter.css'

const Letter = ({letter, buttonInteraction}) => {
  return (
    <button className='Letter' onClick={()=> buttonInteraction(letter)}>
      {letter}
    </button>
  )
}

export default Letter;