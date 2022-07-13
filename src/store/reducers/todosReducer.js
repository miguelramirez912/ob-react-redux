

import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";
// Estado inicial Todos
let initialState = [
    // {
    //     id: 1,
    //     text: 'Primer Tarea',
    //     completed: false
    // }
];

export const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => 
                (todo.id === action.payload.id ?
                    {
                        ...todo,
                        completed: !todo.completed
                    }
                    : 
                    todo
                )
            )
    
        default:
            return state;
    }
}