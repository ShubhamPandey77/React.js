import { useContext } from 'react'
import { Context2 } from '../App'

export default function Themechanger() {
  const { toggleTheme } = useContext(Context2)

  return (
    <>
      <button onClick={ toggleTheme }>Theme Changes</button>
    </>
  )
}
