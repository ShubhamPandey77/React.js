import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router'

function UserEdit() {
      const[id,setId] =useState('')
      const[title,setTitle] =useState('')
      const[views,setViews] =useState('')
      const  navigate = useNavigate()

    const { id: paramId } = useParams();
    
    useEffect(() => {
      getEditdata()
    },[])
    async function getEditdata(){
        const url = `http://localhost:3000/posts/${paramId}`;
        let response = await fetch(url);
        response = await response.json();
        setId(response.id)
        setTitle(response.title)
       setViews(response.views)
    }
    async function showEditted(){
        const url = `http://localhost:3000/posts/${paramId}`;
        let response = await fetch(url, {
            method:"PUT",
            headers: { "Content-Type": "application/json" },
           body:JSON.stringify({id,title,views})
        })
        response = await response.json()
        if (response) {
            alert("Updated");
            navigate('/')
        
        }

        
    }
   


  return (
    <div >
      <h1>Edit Your Content</h1>
     <div className='inpt'>
        <div>
            <input type="text" placeholder='Id' value={id} 
            onChange={(e)=> setId(e.target.value)}/> <br />
       <input type="text" placeholder='Title' value={title}
      onChange={(e)=> setTitle(e.target.value)}/> <br />
        <input type="text" placeholder='Views' value={views}
        onChange={(e)=> setViews(e.target.value)}/> <br />
        </div>
      
        </div>  
         <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}> 
                  <button style={{padding:"15px", width:'100px', backgroundColor:"#767123", borderRadius:"6px"}}
                  onClick={showEditted}> 
               Save Edit</button>
              </div>
    </div>
  )
}

export default UserEdit
