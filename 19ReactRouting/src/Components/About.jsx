import React from 'react'
import { NavLink, Outlet } from 'react-router'

function About() {
  return (
    <div>
      <h1>About us</h1>
        <NavLink to='/'>Go Back</NavLink>
        <br /><br />
      <NavLink to='instagram'>Instagram</NavLink>
      <br />

      <NavLink to='twitter'>Twitter</NavLink><br />
      <NavLink to='Facebook'>Facebook</NavLink><br />
      <NavLink to='whatsapp'>Whatsapp</NavLink><br />
      < Outlet />



    </div>
  )
}

export default About
