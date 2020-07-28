import { combineEpics } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { getFlashcards } from '../api/chanceryApi';
import * as constants from './constants';
import {fetchQuestionsSuccess, fetchQuestionsByTopicSuccess, fetchQuestionsByTopic, filterByDifficulties, filterByDifficultiesSuccess} from './actions';

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

export const updateSelectedDifficultiesEpic = (action$, state$) =>
action$.ofType(constants.UPDATE_SELECTED_DIFFICULTIES).pipe(
    map( action => {
        return filterByDifficulties(action.payload);
    })
);

export const fetchQuestionsByDifficultiesEpic = (action$, state$) =>
action$.ofType(constants.FETCH_QUESTIONS_BY_DIFFICULTIES).pipe(
    map( action => {
    
        const filteredQuestions = state$.value.flashcards.filter(flashcard => action.payload.includes(flashcard.difficulty));

        let selectedQuestionsByDifficulty = [];
        if (action.payload.includes(constants.EASY)) {
            selectedQuestionsByDifficulty = selectedQuestionsByDifficulty.concat(filteredQuestions.filter(flashcard => flashcard.difficulty === constants.EASY).map(flashcard => flashcard.id));
        } 

        if (action.payload.includes(constants.MEDIUM)) {
            selectedQuestionsByDifficulty = selectedQuestionsByDifficulty.concat(filteredQuestions.filter(flashcard => flashcard.difficulty === constants.MEDIUM).map(flashcard => flashcard.id));
        } 

        if (action.payload.includes(constants.HARD)) {
            selectedQuestionsByDifficulty = selectedQuestionsByDifficulty.concat(filteredQuestions.filter(flashcard => flashcard.difficulty === constants.HARD).map(flashcard => flashcard.id));
        } 

        const result = state$.value.selectedFlashcards.filter(id => selectedQuestionsByDifficulty.includes(id));
        console.log(result);
        return filterByDifficultiesSuccess(result);
    })    
);

export const rootEpic = combineEpics(
    fetchQuestionsEpic,
    updateSelectedTopicsEpic,
    updateSelectedDifficultiesEpic,
    fetchQuestionsByTopicEpic,
    fetchQuestionsByDifficultiesEpic,
);