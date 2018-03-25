import {slider} from '../../data/feed';

export const GET_SLIDES = 'GET_SLIDES';
export const SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE';

export function getSlides() {
    return ({
        type: GET_SLIDES,
        payload: slider
    })
}

export function setCurrentSlide(index) {
    return ({
        type: SET_CURRENT_SLIDE,
        payload: index
    })
}