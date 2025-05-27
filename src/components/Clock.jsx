import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex text-center justify-center px-2 mb-2  " style={{color:"#fff"}}>
      <div className='bg-indigo-900 rounded-md p-1' id="clock">{time}</div>
    </div>
  );
}

export default Clock;