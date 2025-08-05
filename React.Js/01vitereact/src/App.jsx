import React from "react"
import  './App.css'
import MSD from './image/MSD.jpg';
import Yuvraj from './image/Yuvraj.jpg';
import Sachin from './image/Sachin.jpg';
import Rohit from './image/Rohit.jpg';
import Core_Concepts from './Data';




function CoreComponents(props){
return(
<div className="C1">
  <img src= {props.image} alt={props.Name} />
  <h1>{props.Name}</h1>
  <p>{props.description }</p>
</div>
)




}
function App() {

  return (
    <div className="c2">
      <h1>Vite + React | Shubham Pandey</h1>
      
      <CoreComponents 
       image ={MSD}
       Name = "Ms Dhoni"
       description =  "React has been designed from the start for gradual adoption. You can use as little or as much React as you need" 
      />
      <CoreComponents
      image ={Core_Concepts[1].image}
       Name = {Core_Concepts[1].Name}
       description = {Core_Concepts[1].description}
      /> 
      <CoreComponents  
       image ={Core_Concepts[2].image}
       Name = {Core_Concepts[2].Name}
       description = {Core_Concepts[2].description}
      />
      //or much more optimised
      <CoreComponents {...Core_Concepts[3]} />
      

    </div>
  )
}
export default App
