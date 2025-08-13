import React, { useState } from 'react'
import '../App.css';

function Adduser() {
  const[id,setId] =useState('')
  const[title,setTitle] =useState('')
  const[views,setViews] =useState('')
  async function creatUserInfo (){
   const url ="http://localhost:3000/posts"
   let response = await fetch(url,{
    method:'Post',
      headers: {
        "Content-Type": "application/json"
      },
    body:JSON.stringify({id,title,views})

   });
   response = await response.json();
   if(response){
    alert("New User Added")
   }
  }
  return (
    <div>
      <h1>Add Your Content</h1>
      <div className='inpt'>
        <div>
            <input type="text" placeholder='Id' 
            onChange={(e)=>setId (e.target.value)}
            /> <br />
            <input type="text" placeholder='Title'
             onChange={(e)=> setTitle(e.target.value)}
            /> <br />
            <input type="number" placeholder='Views' 
             onChange={(e)=> setViews(e.target.value)}
            /> <br />
            </div>
          

    </div>
              <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}> 
      <button style={{padding:"15px", width:'100px', backgroundColor:"#767123", borderRadius:"6px"}}
              onClick={creatUserInfo}> 
               Save </button>
              </div>

    </div>
  )
}

export default Adduser
