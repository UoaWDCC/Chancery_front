import { combineEpics } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { getFlashcards } from '../api/chanceryApi';
import * as constants from './constants';
import {fetchQuestionsSuccess, updateFiltersSuccess} from './actions';

export const fetchQuestionsEpic = (action$, state$) =>
action$.ofType(constants.FETCH_QUESTIONS).pipe(
    mergeMap(async () => {
        const result = await getFlashcards();
        return fetchQuestionsSuccess(result);
    })    
);

export const updateFiltersEpic = (action$, state$) =>
action$.ofType(constants.UPDATE_FILTERS).pipe(
    map( action => {
        const flashcardsByTopic = state$.value.flashcards.filter(flashcard => action.payload.topics.length === 0 || action.payload.topics.includes(flashcard.topic));
        const filteredFlashcardsId = flashcardsByTopic.filter(flashcard => action.payload.difficulties.length === 0 || action.payload.difficulties.includes(flashcard.difficulty)).map(flashcard => flashcard.id);
        return updateFiltersSuccess(filteredFlashcardsId);
    })
);

export const rootEpic = combineEpics(
    fetchQuestionsEpic,
    updateFiltersEpic,
);