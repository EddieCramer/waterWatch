import React, { useState, useEffect } from 'react';

const Goal = ({ setGoal }) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length < 5 && (!isNaN(Number(e.target.value)))) {
      setInput(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setGoal(Number(input));
    setInput('');
  }

  const handleButton = (e) => {
    e.preventDefault();

    setInput(e.target.name);
  }

  return (
    <div id='goal'>
      <h2 id='goal-title'>Set Your Daily Goal</h2>
      <input className='form-input' onChange={ handleChange } value={ input }></input>
      <span className='unit'>oz</span>
      <button className='form-submit' onClick={ handleSubmit }>Submit</button>
      <br></br>
      <button className='premade' name='128' onClick={ handleButton }>1 GALLON</button>
      <button className='premade'name='64' onClick={ handleButton }>1/2 GALLON</button>
      <button className='premade' name='34' onClick={ handleButton }>1 LITER</button>
    </div>
  )
}

export default Goal;