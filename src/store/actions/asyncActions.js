// Tipos de acciones asincronas disponibles
export const API_CALL_REQUEST = 'API_CALL_REQUEST';// Escuchada por el watcher Saga
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';// Despachada por Worker Saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE';// Despachada por Worker Saga

//Accion http especial para un login
export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
                email: email,
                password: password
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}

// Accion http Request generica
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            method: method,
            url: url,
            data: data,
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}