import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Child(props) {
    const[user,setUser]= useState(null)
    useEffect(()=>{
        Rendering()
    },[])
    async function Rendering(){
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json();
        setUser(response)
    }
  return (
    <div>
     { props.render(user)}
    </div>
  )
}

export default Child
