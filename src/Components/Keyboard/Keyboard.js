import React from 'react';
import Letter from '../Letter/Letter';
import './Keyboard.css'

const Keyboard = ({buttonInteraction, del, enter}) => {
  const qwerty1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const qwerty2 = ['a','s','d','f','g','h','j','k','l'];
  const qwerty3 = ['z','x','c','v','b','n','m'];

  let line1 = qwerty1.map((value) => {
    return (
      <Letter letter={value} key={value} buttonInteraction={buttonInteraction}/>
    )
  });
  let line2 = qwerty2.map((value) => {
    return (
      <Letter letter={value} key={value} buttonInteraction={buttonInteraction}/>
    )
  });
  let line3 = qwerty3.map((value) => {
    return (
      <Letter letter={value} key={value} buttonInteraction={buttonInteraction}/>
    )
  });

  return (
    <div className='Keyboard'>
      <div className='Line'>{line1}</div>
      <div className='Line'>{line2}</div>
      <div className='Line'>
        <button onClick={enter}>ENTER</button>
        {line3}
        <button onClick={del}>DEL</button>
      </div>
    </div>
  )

}

export default Keyboard;