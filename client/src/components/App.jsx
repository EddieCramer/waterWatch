import React, { useState, useEffect } from 'react';
import BottleView from './BottleView.jsx';
import Goal from './Goal.jsx';
import Add from './Add.jsx';
import Login from './Login.jsx';
import Log from './Log.jsx';

const App = () => {

  const [ goal, setGoal ] = useState(null);
  const [ current, setCurrent ] = useState(0);

  return goal
    ? (
      <>
        <Login />
        <Log goal={ goal } current={ current }/>
        <BottleView goal={ goal }/>
        <Add />
      </>
    )
    : (
      <>
        <Login />
        <Goal setGoal={ setGoal }/>
      </>
    )
}

export default App;