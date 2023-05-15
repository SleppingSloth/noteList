import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const NoteForm = ({title, description, isCreateNote, changeNoteData, createNewNote}) => {
    const [noteData, setNoteData] = useState({
        title: title, description: description
    })

    const onChangeNote = (e) => {
        e.preventDefault()
        changeNoteData({id: uuidv4, title: noteData.title, description: noteData.description})
    }

    const onCreateNote = (e) => {
        e.preventDefault()
        createNewNote({id: uuidv4, title: noteData.title, description: noteData.description})
    }

    return (<form>
        <span>Title</span>
        <input value={noteData.title} onChange={(e) => setNoteData({...noteData, title: e.target.value})}
               placeholder={'Title'}
               type="text" minLength={5}/>
        <span>Description</span>
        <input value={noteData.description}
               onChange={(e) => setNoteData({...noteData, description: e.target.value})}
               placeholder={'Description'} type="text" minLength={5}/>
        {isCreateNote ? <button onClick={onCreateNote}>Crete new note</button> :
            <button onClick={onChangeNote}>Change note</button>}
    </form>);
};

export default NoteForm;