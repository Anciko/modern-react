import Note from "./Note"

const NoteLists = ({ children }) => {
    return (
        <div className='mt-6'>
            <h3 className='font-bold text-lg mb-2'>Your Notes</h3>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export default NoteLists
