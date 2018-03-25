import * as SliderActions from '../actions/SliderActions';

const defaultState = {
    slides: [],
    currentSlideIndex: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case SliderActions.GET_SLIDES:
            return {
                ...state,
                slides: action.payload
            };
        case SliderActions.SET_CURRENT_SLIDE:
            return {
                ...state,
                currentSlideIndex: action.payload
            };
        default:
            return state;
    }
}