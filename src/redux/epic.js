import { combineEpics } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { getFlashcards } from '../api/chanceryApi';
import * as constants from './constants';
import {fetchQuestionsSuccess} from './actions';

export const fetchQuestionsEpic = (action$, state$) =>
action$.ofType(constants.FETCH_QUESTIONS).pipe(
    mergeMap(async () => {
        const result = await getFlashcards();
        return fetchQuestionsSuccess(result);
    })    
);

export const rootEpic = combineEpics(
    fetchQuestionsEpic,
);