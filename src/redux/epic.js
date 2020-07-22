import { combineEpics } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { getFlashcards } from '../api/chanceryApi';
import * as constants from './constants';
import {fetchQuestionsSuccess, fetchQuestionsByTopicSuccess, fetchQuestionsByTopic} from './actions';

export const fetchQuestionsEpic = (action$, state$) =>
action$.ofType(constants.FETCH_QUESTIONS).pipe(
    mergeMap(async () => {
        const result = await getFlashcards();
        return fetchQuestionsSuccess(result);
    })    
);

export const updateSelectedTopicsEpic = (action$, state$) =>
action$.ofType(constants.UPDATE_SELECTED_TOPICS).pipe(
    map( action => {
        return fetchQuestionsByTopic(action.payload);
    })
);

export const fetchQuestionsByTopicEpic = (action$, state$) =>
action$.ofType(constants.FETCH_QUESTIONS_BY_TOPIC).pipe(
    map( action => {
        const filteredQuestions = state$.value.flashcards.filter(flashcard => action.payload.includes(flashcard.topic));
        const result = filteredQuestions.map(flashcard => flashcard.id);
        return fetchQuestionsByTopicSuccess(result);
    })    
);



export const rootEpic = combineEpics(
    fetchQuestionsEpic,
    updateSelectedTopicsEpic,
    fetchQuestionsByTopicEpic,
);