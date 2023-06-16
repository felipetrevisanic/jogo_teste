import './InputItem.css'

const InputItem = (props) => {
    return(
        <div className='item'>
            <label>{props.name}:</label>
            <input type='text'></input>
        </div>
    )
}

export default InputItem