import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Goal = ({ setGoal, user }) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length < 5 && (!isNaN(Number(e.target.value)))) {
      setInput(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: user,
      goal: Number(input),
      actual: 0,
      date: moment().format('YYYY-MM-DD')
    }

    axios.put('/logs', data)
      .then(res => {
        setGoal(Number(input));
        setInput('');
      })

  }

  const handleButton = (e) => {
    e.preventDefault();

    setInput(e.target.name);
  }

  return (
    <div id='goal'>
      <h2 id='goal-welcome'>Welcome { user }!</h2>
      <h2 id='goal-title'>Set Your Daily Goal :</h2>
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