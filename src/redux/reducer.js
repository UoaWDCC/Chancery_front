import * as constants from './constants';

export const initialState = {
    flashcards: [],
    displayedFlashcards: [],
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state, 
                flashcards: action.payload,
            };

        case constants.UPDATE_FILTERS_SUCCESS:
            return {
                ...state, 
                displayedFlashcards: action.payload,
            }

        default:
            return state;
    }
};