// Id para las tareas

let nextTodoId = 0;

//Typos de acciones
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'; 

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoId++,
            text // = text: text
        }
    }
}

// Cambiar verdadero a falso cuando estan completas
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

//Filtro de visibilidad 
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}