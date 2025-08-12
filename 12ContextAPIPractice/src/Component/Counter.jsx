import Themechanger from './Themechanger'
import { useContext } from 'react'
import { Context2 } from '../App'

export default function Counter() {
  const { theme } = useContext(Context2)

  return (
    <div style={{ padding: '20px', ...theme }}>
      <h2>This is a themed counter</h2>
      <Themechanger />
    </div>
  )
}
