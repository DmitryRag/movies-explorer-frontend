import './Input.css'

function Input({ id, name, type, placeholder, error, minLength, maxLength, onChange }) {
    return (
        <label className='input' htmlFor={id}>{placeholder}
            <input className='input__zone' 
                id={id} 
                type={type} 
                name={name} 
                required 
                minLength={minLength} 
                maxLength={maxLength}
                onChange={onChange}
            />
            {!!error && <span className='input__span'>{error}</span>}
        </label>
    )
}

export default Input