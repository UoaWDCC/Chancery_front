export const initialState = {
    isDark: true,
    topics: ["Accounting", "EV / Equity Value", "Valuation", "Discounted Cash Flow", "Merger Model", "Leveraged buy-out"],
    difficulties: ["Easy", "Medium", "Hard"],
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};