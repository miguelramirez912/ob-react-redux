import { createStore, compose } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension'
import { rootReducer } from "../reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "../sagas/sagas";

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools());
    return store;
}

export const createAsyncAppStore = () => {
    const sagaMiddleware = createSagaMiddleware()

    let store = createStore(
        rootReducer, 
        compose(sagaMiddleware, composeWithDevTools()),
        );

    sagaMiddleware.run(watcherSaga);

    return store;
}