export const initialState = {
    topics: ["Accounting", "EV / Equity Value", "Valuation", "Discounted Cash Flow", "Merger Model", "Leveraged buy-out"],
    difficulties: ["Easy", "Medium", "Hard"],
    questions: [
        {
            id: 1,
            question: "What’s the difference between LIFO and FIFO? Can you walk me through an example of how they differ?", 
            answer: "First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO. \nFirst, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.",
            difficulty: "Easy", 
            topic: "Accounting",
        }, 
        {
            id: 2,
            question: "Why is francis so fucking gay?", 
            answer: "He was born like that",
            difficulty: "Hard", 
            topic: "Merger Model",
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};