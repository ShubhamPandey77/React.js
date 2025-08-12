import { useState, createContext } from 'react'
import Counter from './Components/Counter'
import './App.css' 

const context1 = createContext()

function App() {
  

  return (
    <div style={{ height: '100vh', backgroundColor: '#616161' }}>
      <h1 style={{ backgroundColor: 'greenyellow' }}>Context API</h1>
      <context1.Provider value=
      {{ increment : 'iy1'}}>
        <Counter />
      </context1.Provider>
       <context1.Provider value=
      {{ increment : 'iy2'}}>
        <Counter />
      </context1.Provider>
       <context1.Provider value=
      {{ increment : 'iy3'}}>
        <Counter />
      </context1.Provider>
       <context1.Provider value=
      {{ increment : 'iy4'}}>
        <Counter />
      </context1.Provider>
    </div>
  )
}

export default App
export { context1 }
