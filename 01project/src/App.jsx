import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let counter =15
//  const addValue = () =>{
//   console.log("Value Added",counter);
//   counter = counter + 1

//hooks and function humesha starting function ke next line se hi start honge not after if else
 
let [counter,setcounter] = useState(0)

  const addValue = () =>{
    if(counter <20 )
{
  setcounter(counter+1)
 
}
  }

  const removeValue = () =>{
    if (counter > 0) {
      setcounter(counter-1)
    }
 }


  return (
    <>
      <h1>React Course</h1>
      <h3>Counter Value :{counter}</h3>
      <button onClick ={addValue}>
        
        Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value  </button>
      <p>{counter}</p>
    
    </>
  )
}

export default App
