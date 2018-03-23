import {connect} from "react-redux";
import App from '../components/App';
import * as NotesActions from "../store/actions/NotesActions";

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(NotesActions.loadNotes());
    },
    onCreateNote: (note) => {
        dispatch(NotesActions.createNote(note));
    },
    onDeleteNote: (note) => {
        dispatch(NotesActions.deleteNote(note._id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);