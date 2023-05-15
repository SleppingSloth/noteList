import React, {useCallback, useState} from 'react';
import NotesItem from "../NotesItem";
import './style.css'
import {notes} from "../../mock-data/noteList";

const NotesList = () => {
    const [notesList, setNotesList] = useState(notes)

    const onDeleteNote = useCallback((id) => {
        const updatedList = notesList.filter(note => note.id !== id)
        setNotesList(updatedList)
    }, [])

    const onChangeNotData = useCallback((id, title, description) => {
        console.log(id, title, description)
        const updatedList = notes.map(note => {
            if (note.id === id) {
                console.log()
                return {title: title, description: description}
            } else {
                return note
            }
        })

        console.log(updatedList);
        setNotesList(updatedList)
    }, [])

    return (
        <>
            <h2>My Notes</h2>
            <ul className='notes-list'>
                {
                    notesList && notesList.map((note) => {
                        return <NotesItem key={note.id} {...note}
                                          deleteNote={onDeleteNote}
                                          changeNoteData={onChangeNotData}
                        />
                    })
                }
            </ul>

        </>
    );
};

export default NotesList;