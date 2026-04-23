const TextInput = ({ label, value, handleChange }) => {
    return (
        <div className='mb-4'>
            <label htmlFor={label} className='block mb-1 capitalize-first'>{label}</label>
            <input type="text"
                name={label}
                className='border rounded-lg p-2  w-full outline-0'
                value={value} 
                onChange={handleChange}
            />
        </div>
    )
}

export default TextInput
