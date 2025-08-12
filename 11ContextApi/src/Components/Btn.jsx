import { context1 } from '../App'
import { useContext } from 'react'

export default function Btn() {
  const user = useContext(context1)
  
  return (
    <div>
      <button>{user.increment}</button>
     
    </div>
  )
}
