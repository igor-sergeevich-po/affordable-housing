import React, { useState } from 'react';
import './search.css'

export const Search = ({houses}) => {
  const [text, setText] = useState('')
    console.log(houses)
  function handleInput(e) {
    setText(e.target.value)
    console.log(e.target.value)

  }
  return (
    <div className='wrapperr'>
        <input value={text} className='search' type='text' placeholder='Поиск_' onChange={(e)=>handleInput(e)} />
    </div>
  )
}
