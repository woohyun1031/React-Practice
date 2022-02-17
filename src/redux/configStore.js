//configStore.js
import { createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import bucket from "./modules/bucket"; //리듀서 갖고오는겨

// root 리듀서를 만들어줍니다. -> 리듀서 다 묶은거 -> 리듀서 다 합치는거
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const middlewares = [thunk];
const rootReducer = combineReducers({ bucket });
const enhancer = applyMiddleware(...middlewares);

// 스토어를 만듭니다.
const store = createStore(rootReducer, enhancer); //다 합친걸로 스토어 만드는거

export default store;