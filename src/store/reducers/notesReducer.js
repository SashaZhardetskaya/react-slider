import * as NotesActions from '../actions/NotesActions';

const defaultState = {
    notes: [],
    loading: false,
    error: false,
    errorText: '',
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NotesActions.LOAD_NOTES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case NotesActions.LOAD_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                notes: action.payload
            };
        case NotesActions.LOAD_NOTES_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorText: action.payload,
            };

        case NotesActions.CREATE_NOTES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                errorText: '',
                notes: [
                    ...state.notes,
                    action.payload
                ]
            };



        default:
            return state;
    }
}