import './Header.css';


export default function Header({title,image}){
    return(
      <div className='C1'>
        <div className='he1'>
            <h1>{title}</h1>
            <img src={image} alt="Anything" />
        </div>

      </div>
    )
}