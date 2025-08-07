import '../App.css'
import { useState } from 'react'

export default function Player({initialName,symbol})
{
    const [edit,setEdit] = useState(false)
     const [playersName, setPlayersName] = useState(initialName); 

function handleClick(){
    // if(!edit)
    // {setEdit(true)
    //}if(edit)
    //  { setEdit(false)
    // }
    // Bad method...niche shhi method h
    setEdit((prev)=> !prev)
}
function handleNameChange(e){
    setPlayersName(e.target.value)
}
let playerName =   <span className='player-name'>{playersName}</span>
if(edit){
    playerName = <input type="text" placeholder='Write Player Name' value={playersName} onChange={handleNameChange} />
   
}

    return(
      
        <li>
           <span className='player'>
             {playerName}
             <span className='player-symbol'>{symbol}</span>
           </span>
            <button onClick ={handleClick}>{edit ? 'Save':'Edit'}</button>
        </li>

  
    )
}