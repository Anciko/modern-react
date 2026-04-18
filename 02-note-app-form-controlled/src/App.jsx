import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NoteForm from './components/NoteForm'
import NoteLists from './components/NoteLists'
import Note from './components/Note'

function App() {

  const [notes, setNotes] = useState([])

  const handleDelete = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  }

  return (
    <div className='bg-white rounded-lg p-6 mx-auto max-w-2xl mt-10 shadow-md'>
      <h2 className='text-center font-bold'>Notes App</h2>
      <NoteForm notes={notes} setNotes={setNotes} />

      {
        notes && (
          <NoteLists>
             {
              notes.map((note, index) => {
                return <Note key={index} note={note}  handleDelete={() => handleDelete(note.id)} />
              })
             }
          </NoteLists>
        )
      }
    </div>
  )
}

export default App
