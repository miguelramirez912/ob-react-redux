import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/asyncActions';

//Watcher SAGA
//Escuha la accion API_CALL_REQUEST
export function* watcherSaga() {
    //Escucha la accioni y lanza un worker saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

//Worker SAGA
// Llamado desde watcherSaga, hace el login y despacha una accion
export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request));
        const token = response.data.token;
        yield put({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error: error
            }
        });
    }
}

function fetchHttp(request){
    return function(){
        return(axios(request))
    }
}