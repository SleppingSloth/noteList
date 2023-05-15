import React, {useCallback, useState} from 'react';
import Modal from "../Modal";
import NoteForm from "../NoteForm";

const CreateNote = () => {
    const [onShowModal, setOnShowModal] = useState(false)

    const openModal = () => {
        setOnShowModal(true)
    }

    const closeModal = useCallback(() => {
        setOnShowModal(false)
    }, [])

    // const createNewNote = useCallback((newNote) => {
    //     setNotesList([...notesList, newNote])
    // },[])

    return (<>
        <button onClick={() => openModal()}>Create new note</button>

        <Modal onClose={closeModal} show={onShowModal} title={'Create new note'}>
            <NoteForm
                      // createNewNote={createNewNote}
            />
        </Modal>
    </>);
};

export default CreateNote;