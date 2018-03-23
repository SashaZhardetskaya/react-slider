import {combineReducers} from "redux";

import notes from './notesReducer';

const reducers = combineReducers({
    notes
});

export default reducers;