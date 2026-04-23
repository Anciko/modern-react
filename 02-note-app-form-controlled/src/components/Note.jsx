import React from 'react'

function Note({note, handleDelete}) {
    return (
        <li className={`border-l-4 shadow-md rounded-md px-4 py-2 ${note.priority === 'high' ? 'border-red-500' : note.priority === 'medium' ? 'border-yellow-500' : 'border-green-500'}`}>
            <h4 className='font-bold'>{note.title}</h4>
            <p>{note.description}</p>
            <button 
            onClick={(e) => handleDelete(note.id)}
            className='cursor-pointer px-2 bg-red-400 rounded-md text-white mt-2 py-1'>Delete</button>
        </li>
    )
}

export default Note
