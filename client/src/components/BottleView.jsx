import React, { useState, useEffect } from 'react';

const BottleView = ({ goal }) => {

  return (
    <div id='bottle-view'>
      <div id='lid'></div>
      <div id='bottle'>
        <p className='checkpoint' id='max'>{ goal } oz</p>
        <p className='checkpoint' id='three-quarters'>{ goal * 0.75 } oz</p>
        <p className='checkpoint' id='half'>{ goal * 0.5 } oz</p>
        <p className='checkpoint' id='one-quarter'>{ goal * 0.25 } oz</p>
      </div>
    </div>
  )
}

export default BottleView;