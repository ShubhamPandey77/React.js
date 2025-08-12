import React from 'react'
import { useReducer } from 'react'
const initialValue ={
  count:0
}
const reducer =(state,action) =>{
   switch(action.type){
    case 'increment':
        return { count: state.count+1}
         case 'decrement':
        return { count: state.count-1}

   }
}

function Counter2() {

  const[state,dispatch] = useReducer(reducer,initialValue)
  return (
    <div>
      <h1>HLW Count: {state.count}</h1>
      <button onClick={()=>{dispatch({type:'increment'})}}>
        Increment
      </button>
       <button onClick={()=>{dispatch({type:'decrement'})}}>
        Decrement
      </button>
    </div>
  )
}

export default Counter2
