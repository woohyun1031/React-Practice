import {
  legacy_createStore as createStore, //store 생성
  combineReducers, //여러 reducer combine
  applyMiddleware, //middleware 생성
} from "redux";

import { createBrowserHistory } from "history";

import thunk from "redux-thunk";
import bucket from "./modules/bucket";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ bucket });

const store = createStore(rootReducer, enhancer);
//store는 = rootReducer와 middleware를 받는 enhancer로 이뤄진다.
export default store;
