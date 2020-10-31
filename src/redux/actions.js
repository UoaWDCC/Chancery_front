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

export const updateFiltersSuccess = (flashcards, topics, difficulties) => {
    return { type: constants.UPDATE_FILTERS_SUCCESS, payload: {flashcards: flashcards, topics: topics, difficulties: difficulties}};
}

export const resetFilters = () => {
    return { type: constants.RESET_FILTERS};
}

export const resetFiltersSuccess = flashcards => {
    return { type: constants.RESET_FILTERS_SUCCESS, payload: flashcards}
}

export const updateCurrentIndex = index => {
    return { type: constants.UPDATE_CURRENT_INDEX, payload: index }
}

export const updateCurrentIndexSuccess = index => {
    return { type: constants.UPDATE_CURRENT_INDEX_SUCCESS, payload: index }
}