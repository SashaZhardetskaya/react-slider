import * as SliderActions from '../actions/SliderActions';

const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case SliderActions.GET_SLIDES:
            return [
                ...action.payload
            ];
        default:
            return state;
    }
}