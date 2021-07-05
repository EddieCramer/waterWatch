import React, { useState, useEffect } from 'react';

const Goal = ({ setGoal }) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setGoal(input);
    setInput('');
  }

  return (
    <div id='goal'>
      <h2>Set Your Daily Goal</h2>
      <input id='form-goal' onChange={ handleChange } value={ input }></input>
      <span id='unit'>oz</span>
      <button id='form-submit' onClick={ handleSubmit }>Submit</button>
      <br></br>
      <button className='premade'></button>
      <button className='premade'></button>
      <button className='premade'></button>
    </div>
  )
}

export default Goal;