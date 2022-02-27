import React from 'react';
import Letter from '../Letter/Letter';
import './Keyboard.css'

const Keyboard = ({buttonInteraction, del, enter, letterStatus}) => {
  const qwerty1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const qwerty2 = ['a','s','d','f','g','h','j','k','l'];
  const qwerty3 = ['z','x','c','v','b','n','m'];

  const keyboard = [qwerty1, qwerty2, qwerty3];
  const allKeys = []

  for (let i = 0; i < keyboard.length; i = i + 1) {
    allKeys.push(keyboard[i].map((value) => {
      const letterColor = letterStatus[value] === 0 ? 'grey' : letterStatus[value] === 1 ? 'yellow' : 'green';
      return (
        <Letter letter={value.toUpperCase()} key={value} buttonInteraction={buttonInteraction} status={letterColor}/>
      )
    }));
  }

  return (
    <div className='Keyboard'>
      <div className='Line'>{allKeys[0]}</div>
      <div className='Line'>{allKeys[1]}</div>
      <div className='Line'>
        <button onClick={enter}>ENTER</button>
        {allKeys[2]}
        <button onClick={del}>DEL</button>
      </div>
    </div>
  )

}

export default Keyboard;