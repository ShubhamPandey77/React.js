import { useState } from 'react'
import './App.css'
import MSD from './assets/MSD.jpg'

function App() {
  
  return (
    <>
    <div className=' h-screen flex item justify-center items-center flex-wrap md:w-16xl'>
      <h1 className='text-xl  md:w-8xl  bg-amber-400'>Tailwind Css</h1>
      <img className='h-36 w-1xl m-6  mb-8' src={MSD} alt="" /></div>
    
    </>
  )
}

export default App
