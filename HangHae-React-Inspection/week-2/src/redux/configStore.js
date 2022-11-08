import { combineReducers, legacy_createStore as createStore } from "redux";
import quiz from "./modules/quiz";
import rank from "./modules/rank";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const middlewares = [thunk];

const rootReducer = combineReducers({ quiz, rank });
const store = createStore(rootReducer);

export default store;
