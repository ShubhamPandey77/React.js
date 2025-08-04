import { useState } from 'react'

import "./App.css"

function App() {
 const [color, setColor] = useState("pink")


  return (
    <div className='C1' style={{ backgroundColor: color }}>
      <div className='Container'>
        <button onClick={() => setColor("red")} className='Red'>Red</button>
        <button onClick={() => setColor("green")} className='Green'>Green</button>
        <button onClick={() => setColor("yellow")} className='Yellow'>Yellow</button>
        <button onClick={() => setColor("blue")} className='Blue'>Blue</button>
        <button onClick={() => setColor("skyblue")} className='Skyblue'>Skyblue</button>
        <button onClick={() => setColor("grey")} className='Grey'>Grey</button>
        <button onClick={() => setColor("purple")} className='Purple'>Purple</button>
        <button onClick={() => setColor("pink")} className='Pink'>Pink</button>
        <button onClick={() => setColor("orange")} className='Orange'>Orange</button>
        <button onClick={() => setColor("whitesmoke")} className='white'>White</button>
      </div>
    </div>
     

   
  )
}

export default App
