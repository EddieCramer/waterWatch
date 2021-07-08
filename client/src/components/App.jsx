import React, { useState, useEffect } from 'react';
import BottleView from './BottleView.jsx';
import Goal from './Goal.jsx';
import Add from './Add.jsx';
import Logout from './Logout.jsx';
import Log from './Log.jsx';
import Login from './Login.jsx';
import Quote from './Quote.jsx';

const App = () => {

  const [ goal, setGoal ] = useState(0);
  const [ current, setCurrent ] = useState(0);
  const [ user, setUser ] = useState('');
  const [ logs, setLogs ] = useState([]);

  return user
  ? goal
      ? (
        <>
          <Quote />
          <Logout setGoal={ setGoal } setCurrent={ setCurrent } setUser={ setUser } setLogs={ setLogs }/>
          <Log goal={ goal } current={ current } user={ user } logs={ logs }/>
          <BottleView goal={ goal } current={ current }/>
          <Add current={ current } setCurrent={ setCurrent } user={ user } goal={ goal }/>
        </>
      )
      : (
        <>
          <Quote />
          <Goal setGoal={ setGoal } user={ user }/>
        </>
      )
  : (
    <>
      <Quote />
      <h2 id='intro'>Welcome to WaterWatch, <br></br> the web app designed to help you track your daily water intake!</h2>
      <Login setUser={ setUser } setGoal={ setGoal } setCurrent={ setCurrent } setLogs={ setLogs }/>
    </>
  )
}

export default App;