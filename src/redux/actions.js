import * as constants from './constants';

export const fetchQuestions = () => {
    return { type: constants.FETCH_QUESTIONS };
};

export const fetchQuestionsSuccess = questions => {
    return { type: constants.FETCH_QUESTIONS_SUCCESS, payload: questions};
}

export const updateSelectedTopics = selectedTopics => {
    return { type: constants.UPDATE_SELECTED_TOPICS, payload: selectedTopics};
}

export const fetchQuestionsByTopic = selectedTopics => {
    return { type: constants.FETCH_QUESTIONS_BY_TOPIC, payload: selectedTopics};
}

export const fetchQuestionsByTopicSuccess = ids => {
    return { type: constants.FETCH_QUESTIONS_BY_TOPIC_SUCCESS, payload: ids};
}