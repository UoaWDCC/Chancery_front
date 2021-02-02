// Actions

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';

export const UPDATE_FILTERS = 'UPDATE_FILTERS';

export const UPDATE_FILTERS_SUCCESS = 'UPDATE_FILTERS_SUCCESS';

export const RESET_FILTERS = 'RESET_FILTERS';

export const RESET_FILTERS_SUCCESS = 'RESET_FILTERS_SUCCESS';

export const UPDATE_CURRENT_INDEX = 'UPDATE_CURRENT_INDEX';

export const UPDATE_CURRENT_INDEX_SUCCESS = 'UPDATE_CURRENT_INDEX_SUCCESS';

// Filter Headings

export const EASY = 'Easy'; 

export const MEDIUM = 'Medium'; 

export const HARD = 'Hard'; 

export const ACCOUNTING = 'Accounting';

export const EV_EQUITY_VALUE = 'EV / Equity Value';

export const VALUATION = 'Valuation';

export const DISCOUNTED_CASH_FLOW = 'Discounted Cash Flow';

export const MERGER_MODEL = 'Merger Model';

export const LEVERAGED_BUY_OUT = 'LBO';

export const topics = [
    ACCOUNTING,
    EV_EQUITY_VALUE,
    VALUATION,
    DISCOUNTED_CASH_FLOW,
    MERGER_MODEL,
    LEVERAGED_BUY_OUT,
  ];

export const difficulties = [EASY, MEDIUM, HARD];