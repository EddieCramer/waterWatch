import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({ logs }) => {

  // const actuals = logs.map(log => {
  //   return log.actual;
  // })


  // const goals = logs.map(log => {
  //   return log.goal;
  // })

  const goal = logs[0].goal;



  return (
    <div id='chart'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={logs}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" style={{fontSize: "16px"}}/>
          <YAxis domain={[0, ('dataMax + 100')]} style={{fontSize: "16px"}}/>
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="rgb(48, 106, 182)" activeDot={{ r: 8 }} dot={false}/>
          <Line type="monotone" dataKey="goal" stroke="#82ca9d" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )

}

export default Chart;