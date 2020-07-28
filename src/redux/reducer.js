import * as constants from './constants';

export const initialState = {
    topics: [constants.ACCOUNTING, constants.EQUITY_VALUE, constants.VALUATION, constants.DISCOUNTED_CASH_FLOW, constants.MERGER_MODEL, constants.LEVERAGED_BUY_OUT],
    difficulties: [constants.EASY, constants.MEDIUM, constants.HARD],
    flashcards: [{
        question:"Walk me through the 3 financial statements",
        answer:"The 3 major financial statements are the Income Statement, Balance Sheet and Cash Flow Statement.\nThe Income Statement gives the company's revenue and expenses, and goes down to Net Income, the final line on the statement.\nThe Balance Sheet shows the company's Assets - its resources - such as Cash, Inventory and PP&E, as well as its Liabilities - such as Debt and Accounts Payable - and Shareholders' Equity. Assets must equal Liabilities plus Shareholders' Equity.", 
        difficulty:"Easy",
        topic:"Accounting", 
        id:"1",
    }],
    loading: true,
    selectedTopics: [],
    selectedDifficulties: [],
    flashcardsBySelectedTopic: [],
    selectedEasy: [],
    selectedMedium: [],
    selectedHard: [],
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

        case constants.FETCH_QUESTIONS_BY_TOPIC_SUCCESS:
            return {
                ...state, 
                flashcardsBySelectedTopic: action.payload,
                loading: false,
                displayedFlashcards: action.payload,
            }

        case constants.UPDATE_SELECTED_TOPICS:
            return {
                ...state, 
                selectedTopics: action.payload,
                loading: true,
            }

        case constants.UPDATE_SELECTED_DIFFICULTIES:
            return {
                ...state, 
                selectedDifficulties: action.payload,
                loading: true,
            }

        case constants.FETCH_QUESTIONS_BY_DIFFICULTIES_SUCCESS:
            return {
                ...state, 
                loading: false,
                displayedFlashcards: action.payload,
            }

        default:
            return state;
    }
};