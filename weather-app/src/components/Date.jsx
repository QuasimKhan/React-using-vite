import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div className='date-container'>
      <h2 className='date'>Date(mm-dd-yyyy): {date.toLocaleDateString()}</h2>
      <h2 className='time'>Time: {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
