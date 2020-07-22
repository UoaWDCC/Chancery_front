import * as constants from './constants';

export const initialState = {
    topics: ["Accounting", "EV / Equity Value", "Valuation", "Discounted Cash Flow", "Merger Model", "Leveraged buy-out"],
    difficulties: ["Easy", "Medium", "Hard"],
    flashcards: [{
        question:"",
        answer:"", 
        difficulty:"",
        topic:"", 
        id:"1",
    }],
    loading: true,
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state, 
                flashcards: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};