import React, { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

function NoteForm({ notes, setNotes }) {
    const [formData, setFormData] = useState({
        title: '',
        priority: 'medium',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.title || !formData.description)
            return;


        const newNote = {
            id: Date.now(), // better unique id
            ...formData
        };

        setNotes((prevNotes) => [...prevNotes, newNote]);

        // reset form
        setFormData({
            title: '',
            priority: 'medium',
            description: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                label="title"
                value={formData.title}
                handleChange={handleChange}
            />

            <SelectInput
                label="priority"
                value={formData.priority}
                handleChange={handleChange}
            />

            <TextAreaInput
                label="description"
                value={formData.description}
                handleChange={handleChange}
            />

            <button
                type="submit"
                className="shadow-xl font-bold bg-sky-600 px-4 py-2 rounded-md text-white w-full cursor-pointer"
            >
                Add Note
            </button>
        </form>
    );
}

export default NoteForm;