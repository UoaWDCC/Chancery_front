import * as constants from './constants';

export const initialState = {
    flashcards: [{
        question:"Walk me through the 3 financial statements",
        answer:"The 3 major financial statements are the Income Statement, Balance Sheet and Cash Flow Statement.\nThe Income Statement gives the company's revenue and expenses, and goes down to Net Income, the final line on the statement.\nThe Balance Sheet shows the company's Assets - its resources - such as Cash, Inventory and PP&E, as well as its Liabilities - such as Debt and Accounts Payable - and Shareholders' Equity. Assets must equal Liabilities plus Shareholders' Equity.", 
        difficulty:"Easy",
        topic:"Accounting", 
        id:"1",
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