import * as constants from './constants';

export const fetchQuestions = () => {
    return { type: constants.FETCH_QUESTIONS };
};

export const fetchQuestionsSuccess = questions => {
    return { type: constants.FETCH_QUESTIONS_SUCCESS, payload: questions};
}

export const updateFilters = (selectedTopics, selectedDifficulties) => {
    return { type: constants.UPDATE_FILTERS, payload: {topics: selectedTopics, difficulties: selectedDifficulties}};
}

export const updateFiltersSuccess = ids => {
    return { type: constants.UPDATE_FILTERS_SUCCESS, payload: ids};
}