import { useState } from 'react'
import Dhoni from './assets/MSD.jpg'
import Header from './Components/Header'
import Sachin from './assets/Sachin.jpg'
import Rohit from './assets/Rohit.jpg'
import Yuvraj from './assets/Yuvraj.jpg'
import './App.css'
import Tabbutton from './Components/Tabbutton'

function App() {
  const[changes,setChanges] = useState("Please select")
  
  function handleclick(selectedcomponent){
       setChanges(selectedcomponent);
    }

  return (
    <>
      <Header
       title = "Ms Dhoni"
      image = {Dhoni}
      />
      <Header
      title = "Sachin tendulkar"
      image = {Sachin}
      />
      <Header
      title = "Rohit Sharma"
      image = {Rohit}/>
      <Header
      title = "Yuvraj Singh"
      image = {Yuvraj }/>
      <section>
        <menu>
         
         {/* < Tabbutton buttontitle ="HTML"/>
         < Tabbutton buttontitle ="JS"/>
         < Tabbutton buttontitle ="CSS"/>  */}
         <Tabbutton onselect ={() => handleclick("JRX are the special type of syntax which allows you to use your html syntax inside javascript") }>JSX</Tabbutton> 
           <Tabbutton onselect ={() => handleclick("HTML is the basic skeletop of any of the websites") }>HTML</Tabbutton> 
           <Tabbutton onselect ={() => handleclick("JS implements the logic and make the website more communicable") }> Js</Tabbutton> 
           <Tabbutton onselect ={() => handleclick("CSS is used for the styling of the basic html skeleton of the website") }>CSS</Tabbutton> 
        </menu>
        <p>{changes}</p>
      </section>
     
    </>
  )
}

export default App
