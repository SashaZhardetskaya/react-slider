import {slider} from "../../data/feed";

export const GET_SLIDES = 'GET_SLIDES';

export function getSlides() {
    return ({
        type: GET_SLIDES,
        payload: slider
    })
}