import React, { useState, useEffect } from 'react';

const Log = ({ goal, current }) => {

  return (
    <div id='log'>
      <h2 id='log-stats'>Your Stats</h2>
      <h3>Todays Progress: <span id='progress'>{ current + '/' + goal }</span></h3>
    </div>
  )
}

export default Log;