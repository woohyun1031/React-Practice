import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// 우리의 버킷리스트에 리덕스를 주입해줄 프로바이더를 불러옵니다!
import { Provider } from "react-redux";
// 연결할 스토어도 가지고 와요.
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
