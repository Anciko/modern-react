function SelectInput({ label, value, handleChange }) {
    return (
        <div className='mb-4'>
            <label htmlFor={label} className='block mb-1 capitalize-first'>{label}</label>
            <select className='w-full p-2 border rounded-lg'
                name={label}
                value={value}
                onChange={handleChange}>
                <option value="high">🔴 High</option>
                <option value="medium">🟠 Medium</option>
                <option value="low">🟢 Low</option>
            </select>
        </div>
    )
}

export default SelectInput
