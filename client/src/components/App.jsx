import React, { useState, useEffect } from 'react';
import BottleView from './BottleView.jsx';
import Goal from './Goal.jsx';
import Add from './Add.jsx';
import Logout from './Logout.jsx';
import Log from './Log.jsx';
import Login from './Login.jsx';

const App = () => {

  const [ goal, setGoal ] = useState(0);
  const [ current, setCurrent ] = useState(0);
  const [ user, setUser ] = useState('');

  return user
  ? goal
      ? (
        <>
          <Logout />
          <Log goal={ goal } current={ current } user={ user }/>
          <BottleView goal={ goal } current={ current }/>
          <Add current={ current } setCurrent={ setCurrent }/>
        </>
      )
      : (
          <Goal setGoal={ setGoal }/>
      )
  : (
    <Login setUser={ setUser }/>
  )
}

export default App;