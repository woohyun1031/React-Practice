import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
function sendToAnalytics(metric) {
  const _report = JSON.stringify(metric);
  logEvent(analytics, _report);
  console.log({ _report });
}
reportWebVitals(sendToAnalytics);
