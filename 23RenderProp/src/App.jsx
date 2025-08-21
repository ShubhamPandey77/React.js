import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Parent from './Components/Parent'
import Parent2 from './Components/Parent2'
import './App.css'

function App() {
  const[data,setData]=useState(null)
  function handleDataChange(){
    setData(prev => !prev)
  }
  function handleDataChange() {
    setData(prev => prev === true ? false : true);
  }

  function handleClearScreen() {
    setData(null);   //null ko false ki tarah leta hai esliye itna chutiyapa krna pada
  }

  return (
    <>
      <button onClick={handleDataChange}>
        {data === true ? "Data Of First Parent" : "Data Of Second Parent"}
      </button>
      <br /><br />
      <button onClick={handleClearScreen}>Clear Screen</button>

      {data === true && <Parent />}
      {data === false && <Parent2 />}
      {/* when data === null, nothing renders */}
    </>
  );
}

export default App;
