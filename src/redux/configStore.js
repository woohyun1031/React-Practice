//configStore.js
import { createStore, combineReducers, applyMiddleware } from "redux";

import counter from "./modules/counter";
import todos from "./modules/todos";

import myLogger from "./middlewares/myLogger";

// root 리듀서를 만들어줍니다. -> 리듀서 다 묶은거 -> 리듀서 다 합치는거
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
//const enhancer = applyMiddleware(myLogger);
const rootReducer = combineReducers({ counter, todos });

// 스토어를 만듭니다.
const store = createStore(rootReducer, applyMiddleware(myLogger)); //다 합친걸로 스토어 만드는거

export default store;
