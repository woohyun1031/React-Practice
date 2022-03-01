import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./modules/user";
import postReducer from "./modules/post";
import imageReducer from "./modules/image";
import gridReducer from "./modules/grid";

import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();
const route_history = connectRouter(history);
export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    image: imageReducer,
    grid: gridReducer,
  },
  router: route_history,
});
