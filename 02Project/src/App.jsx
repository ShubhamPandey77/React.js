import { useState } from 'react'

function App() {
  
const[name,setName] = useState('')
const[email,setEmail] = useState('')

 const handleSubmit = (e) => {
    e.preventDefault() // Page reload hone se roko
    console.log("Form Submitted")
    console.log("Name:", name)
    console.log("Email:", email)
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
      <h2>Simple Form</h2>

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br /><br />

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br /><br />

      <button type="submit">Submit</button>

      <p><strong>Your Name:</strong> {name}</p>
      <p><strong>Your Email:</strong> {email}</p>
    </form>

      </>
  )
}

export default App
