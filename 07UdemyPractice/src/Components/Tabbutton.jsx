import './Tabbutton.css'

export default function Tabbutton({children ,onselect}){
    

    return(<div className='T1'>
        <li><button onClick={onselect}>{children}</button></li>
        </div>
        
    )
}