import './InputItem.css'

const InputItem = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }
    
    return(
        <div className='item'>
            <label>{props.name}:</label>
            <input value={props.valor} type={props.tipo} onChange={aoDigitado}></input>
        </div>
    )
}

export default InputItem