import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ userReducer: userReducer });

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
