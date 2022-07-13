import { SET_VISIBILITY_FILTER } from "../actions/actions";

//  Valores iniciales para el estado del filtro de tareas
let initialState = 'SHOW_ALL';

export const filterReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
    
        default:
            return state;
    }
}