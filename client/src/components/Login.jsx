import React, { useState, useEffect } from 'react';

const Login = ({ setUser }) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length < 20) {
      setInput(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('hi')

    setUser(input);
    setInput('');
  }

  return (
    <div id='login'>
      <h2>What is your name?</h2>
      <input id='form-name' onChange={ handleChange } value={ input }></input>
      <button className='form-submit' onClick={ handleSubmit }>Submit</button>
    </div>
  )
}

export default Login;