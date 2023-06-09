import React, {useCallback, useState} from 'react';
import Modal from "../Modal";
import './style.css'
import NoteForm from "../NoteForm";

const NotesListItem = ({title, description, deleteNote, id, changeNoteData, createNewNote}) => {
    const [showNoteModal, setShowModal] = useState(false);
    const [openEditMode, setOpenEditMode] = useState(false)


    const onShowNoteModal = useCallback(() => {
        setShowModal(false)
    }, [])

    const onEditModeToggle = () => {
        setOpenEditMode(!openEditMode)
    }



    return (<>
        <li onClick={() => setShowModal(true)} className='note-item'>
            <h2 className='note-item__title'>{title}</h2>
            <p className="note-item__description">{description}</p>
        </li>
        <Modal show={showNoteModal} onClose={onShowNoteModal} title={"Notes #"}>
            <div>
                <button onClick={() => deleteNote(id)}>Delete note</button>
                <button onClick={onEditModeToggle}>{openEditMode ? "Show mode" : "Edit mode"}</button>
            </div>
            {!openEditMode ? <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div> : <div>
                <NoteForm description={description} title={title} id={id} changeNoteData={changeNoteData}
                          />
            </div>}

        </Modal>
    </>);
};

export default NotesListItem;