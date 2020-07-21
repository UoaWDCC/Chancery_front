import { combineEpics } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { getOrders } from '../api/chanceryApi';
import * as constants from './constants';
import {fetchQuestionsSuccess} from './actions';

export const fetchQuestionsEpic = (action$, state$) =>
action$.ofType(constants.FETCH_QUESTIONS).pipe(
    mergeMap(async () => {
        const result = await getOrders();
        return fetchQuestionsSuccess(result);
    })    
);

export const rootEpic = combineEpics(
    fetchQuestionsEpic,
);