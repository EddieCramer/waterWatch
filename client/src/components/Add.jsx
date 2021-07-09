import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Add = ({ current, setCurrent, user, goal }) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length < 5 && (!isNaN(Number(e.target.value)))) {
      setInput(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: user.toUpperCase(),
      goal: goal,
      actual: Number(input) + current,
      date: moment().format('YYYY-MM-DD')
    }

    axios.put('/logs', data)
      .then(res => {
        setCurrent(Number(input) + current);
        setInput('');
      })

  }

  const handleButton = (e) => {
    e.preventDefault();

    setInput(e.target.name);
  }

  const renderMessage = () => {
    return current >= goal ? <h2 id='success'>You hit your daily goal!</h2> : null;
  }

  return (
    <div id='add'>
      <h2 id='add-title'>Add Water</h2>
      <input className='form-input' onChange={ handleChange } value={ input }></input>
      <span className='unit'>oz</span>
      <button className='form-submit' onClick={ handleSubmit }>Submit</button>
      <br></br>
      <div id='buttons'>
        <div id='large-bottle-lid'></div>
        <button className='premade' id='large-bottle' name='17' onClick={ handleButton }></button>
        <div id='small-bottle-lid'></div>
        <button className='premade' id='small-bottle' name='12' onClick={ handleButton }></button>
        <button className='premade' id='glass' name='8' onClick={ handleButton }></button>
        <p className='button-amount one'>17oz</p>
        <p className='button-amount two'>12oz</p>
        <p className='button-amount three'>8oz</p>
      </div>
      { renderMessage() }
    </div>
  )
}

export default Add;