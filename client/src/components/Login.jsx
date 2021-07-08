import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Login = ({ setUser, setGoal, setCurrent, setLogs }) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length < 20) {
      setInput(e.target.value)
    }
  }

  const returningUser = (data) => {

    axios.get('/logs', { params: data })
      .then(res => {
        let currentLog = res.data.rows[res.data.rows.length - 1];
        let goal = Number(currentLog.goal);
        let logDate = currentLog.date.substring(0, 10);

        res.data.rows.forEach(row => {
          row.date = row.date.substring(8, 10)
        })

        setLogs(res.data.rows.slice(0, res.data.rows.length - 1));

        if (logDate === data.date) {
          setCurrent(Number(currentLog.actual));
          setGoal(goal);
          setUser(data.name.charAt(0) + data.name.slice(1).toLowerCase());
          setInput('');
        } else {
          let newData = {
            name: data.name,
            goal: goal,
            actual: 0
          }
          axios.post('/logs', newData)
            .then(res => {
              setGoal(goal);
              setUser(data.name.charAt(0) + data.name.slice(1).toLowerCase());
              setInput('');
            })
        }
      })
  };

  const newUser = () => {
    let data = {
      name: input.toUpperCase(),
      goal: 0,
      actual: 0
    }
    axios.post('/logs', data)
      .then(res => {
        setUser(input.charAt(0).toUpperCase() + input.slice(1).toLowerCase());
        setInput('');
      })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: input.toUpperCase(),
      date: moment().format('YYYY-MM-DD')
    }

    axios.post('/users', data)
      .then(res => {
        if (!res.data.rowCount) {
          returningUser(data);
        } else {
          newUser(data);
        }
      })

  }

  return (
    <div id='login'>
      <h2>Start by entering your name :</h2>
      <input id='form-name' onChange={ handleChange } value={ input }></input>
      <button className='form-submit' onClick={ handleSubmit }>Submit</button>
    </div>
  )
}

export default Login;