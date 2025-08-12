import { useState, createContext } from 'react'
import Counter from './Component/Counter'

const Context2 = createContext()

function App() {
  const green = {
    backgroundColor: 'green',
    color: 'white'
  }

  const red = {
    backgroundColor: 'red',
    color: 'white'
  }

  const [theme, setTheme] = useState(green)

  function handleTheme() {
    setTheme(green? red :green)
  }

  return (
    <>
      <Context2.Provider value={{ theme, toggleTheme: handleTheme }}>
        <Counter />
      </Context2.Provider>
    </>
  )
}

export default App
export { Context2 }
