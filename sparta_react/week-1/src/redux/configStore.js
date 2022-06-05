import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import bucket from "./modules/bucket";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ bucket });
const store = createStore(rootReducer, enhancer);

export default store;
