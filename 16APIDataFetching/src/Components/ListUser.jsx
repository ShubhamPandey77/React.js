import React from 'react'
import { useState,useEffect } from 'react';
import {NavLink,Router, useNavigate } from 'react-router';

function ListUser() {
    const [userData,setUserData] = useState([]);
      const [loading,setLoading] = useState(false)
      const navigate = useNavigate()
    
      useEffect(()=> {
                       setLoading(true)
                       getuserdata();
                   },[])
    
    async function getuserdata(){
        const url = "http://localhost:3000/posts";
        let response =await fetch(url);
        response = await response.json()
        setUserData(response)
        setLoading(false)
    }
    async function handledelete(id){
     console.log(id)
      const url = "http://localhost:3000/posts";
        let response = await fetch(url +"/"+id , {
          method:"delete"
        });
        response = await response.json();
       
      if(response){
        alert("User Deleted")
      }
       getuserdata()
    }

    //handling the edit button
     async function handleEdit(id){
         navigate(`/edit/${id}`);
     }
  return (
    <div>
       <h1>Makes router and pages for add user and user list</h1>
       
        
         
    <ul>
      <li>Id</li>
      <li>Title</li>
      <li>Views</li>
       <li>Action</li>
    </ul>
      <div>
        {
          !loading?
        userData.map((posts) => (
          <ul key={posts.id}>
            <li>{posts.id}</li>
            <li>{posts.title}</li>
            <li>{posts.views}</li>
              <li className='butt'> <button onClick={()=> handledelete(posts.id)}>Delete</button>
              <button onClick={()=> handleEdit(posts.id)}>Edit</button>
            </li>
          </ul>                    )
                    )
         : <h1>Data Loading.....</h1>           
        }
      </div>
    </div>
  )
}

export default ListUser
