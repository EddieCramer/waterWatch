import React, { useState, useEffect } from 'react';

const Logout = ({ setGoal, setCurrent, setUser}) => {

  const handleLogout = () => {
    setGoal(0);
    setCurrent(0);
    setUser(0);
    setLogs([]);
  }

  return (
    <div id='logout'>
      <button className='logout' onClick={ handleLogout }>Logout</button>
    </div>
  )
}

export default Logout;