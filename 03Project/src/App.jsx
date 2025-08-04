import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'


import Card from './Components/Card'

export function App() {
  

  return (
    <>
    <Card name= "First " />
    <Card name= "Second" />
    <Card name= "Third" />
     
<Card name= "Fourth "/>
     <Card name= "Fifth"/>

    </>
  )
}
export default App
