import * as constants from './constants';

export const fetchQuestions = () => {
    return { type: constants.FETCH_QUESTIONS };
};

export const fetchQuestionsSuccess = questions => {
    return { type: constants.FETCH_QUESTIONS_SUCCESS, payload: questions};
}