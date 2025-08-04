import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className='Container'>
      <h1>{props.name}</h1>
        
<img src="https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />


    </div>
  )
}

export default Card
