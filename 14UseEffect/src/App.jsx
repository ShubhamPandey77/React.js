import { useEffect } from 'react'
import { useState } from 'react'


function App() {
const [start,setstart]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setstart(prev => prev + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1>Count : {start} </h1>
    </>
  )
}

export default App
