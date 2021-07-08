import React, { useState, useEffect } from 'react';
import Chart from './Chart.jsx';

const Log = ({ goal, current, user, logs }) => {

  console.log(logs)

  const renderChart = () => {
    if (logs.length > 1) {
      return <Chart logs={ logs }/>
    } else {
      return <p id='no-history'>You can view your history here once you track multiple days!</p>
    }
  }

  return (
    <div id='log'>
      <h2 id='log-stats'>{user}'s Stats</h2>
      <h3 id='log-today'>Todays Progress : <span id='progress'>{ current + '/' + goal }</span></h3>
      <h3 id='log-history'>History :</h3>
      { renderChart() }
    </div>
  )
}

export default Log;