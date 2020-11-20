import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import search from "./reducers/search";

const reducers = combineReducers({
  search,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//Creando el store
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

export default store;
