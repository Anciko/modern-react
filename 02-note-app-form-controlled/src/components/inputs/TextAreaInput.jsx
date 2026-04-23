
const TextAreaInput = ({ label, value, handleChange }) => {
    return (
        <div className='mb-4'>
            <label htmlFor={label} className='block mb-1'>Description</label>
            <textarea name={label} value={value} onChange={handleChange} className='w-full p-2 border rounded-lg'>

            </textarea>
        </div>
    )
}

export default TextAreaInput
