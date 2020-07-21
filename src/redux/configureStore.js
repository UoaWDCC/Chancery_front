import { applyMiddleware, compose, createStore } from 'redux';
import { initialState, reducer } from './reducer';

import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epic';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(epicMiddleware)),
    );

    epicMiddleware.run(rootEpic);

    return store;
}
