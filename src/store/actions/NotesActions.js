export const LOAD_NOTES_REQUEST = 'LOAD_NOTES_REQUEST';
export const LOAD_NOTES_SUCCESS = 'LOAD_NOTES_SUCCESS';
export const LOAD_NOTES_FAIL = 'LOAD_NOTES_FAIL';
export const CREATE_NOTES_REQUEST = 'CREATE_NOTES_REQUEST';
export const CREATE_NOTES_FAIL = 'CREATE_NOTES_FAIL';
export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';


export function loadNotes(data) {
    return ({
        type: LOAD_NOTES_SUCCESS,
        payload: data
    })
}

export function createNote(note) {
    return ({
        type: CREATE_NOTES_FAIL,
        payload: note
    })
}

export function deleteNote(noteId) {
    return ({
        type: DELETE_NOTE_REQUEST,
        payload: noteId
    })
}
