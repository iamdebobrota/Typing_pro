import { legacy_createStore, combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { typeReducer } from "./typing/typeReducer";

const rootReducer=combineReducers({
    auth:authReducer,
    AppReducer:typeReducer
})

export const store=legacy_createStore(rootReducer);