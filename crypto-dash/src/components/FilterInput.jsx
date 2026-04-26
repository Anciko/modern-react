function FilterInput({ searchTerm, setSearchTerm }) {
    return (
        <div className='filter'>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // ✅ fix
                placeholder="Search coins..."
            />
        </div>
    )
}

export default FilterInput
