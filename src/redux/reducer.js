import * as constants from './constants';

export const initialState = {
    flashcards: [{
        question:"",
        answer:"", 
        difficulty:"",
        topic:"", 
        id:"",
    }],
    loading: true,
    displayedFlashcards: [],

};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state, 
                flashcards: action.payload,
                loading: false,
            };

        case constants.UPDATE_FILTERS_SUCCESS:
            return {
                ...state, 
                loading: false, 
                displayedFlashcards: action.payload,
            }

        default:
            return state;
    }
};