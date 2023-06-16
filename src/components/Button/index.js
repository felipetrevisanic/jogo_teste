import './Button.css'

const Button = (props) =>{
    
    return(
        <button className='button' onClick={props.funcao}>{props.name}</button>
    )
}

export default Button