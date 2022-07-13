import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todoReducer } from "./todosReducer";//revisarr---------se importo como todosReducer
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers(
    {
        // nombre del estado: reducer que lo controlara
        todosState: todoReducer,
        filterState: filterReducer,
        // añadir mas estados con sus reducers para agregarlos al store
        // Ejemplo Asincrono (login user)
        userState: userReducer

    }
)