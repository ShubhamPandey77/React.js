import { useState,useMemo } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const[input,setinput] =useState(0)


 function handleclick(){
  setCount((prev) => prev +1)
 }
 function expensive(num){
  for (let i = 0; i < 100000000; i++) { 
  }
  return num*2
 }

const multiplier =  useMemo(() => expensive(input),[input])
  return (
    <>
      <h1>Counting :{count}</h1>
      <button onClick={handleclick}>Increment</button>
      <br />
      <input type="number"
      placeholder='write number'
      defaultValue={input}
      onChange ={(e)=> setinput(e.target.value)} />
      <br />
      <h2>Multiply : {multiplier}</h2>
    </>
  )
}

export default App
