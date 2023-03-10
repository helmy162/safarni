import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import ScrollToTop from "./utilities/scrollToTop";
import App from "./App";
import HttpsRedirect from 'react-https-redirect';

import Mock from "./state/mock";
import "./state/database";

Mock.onAny().passThrough();

ReactDOM.render(
  <Router>
    <HttpsRedirect>
      <ScrollToTop />
      <App />
    </HttpsRedirect>
  </Router>,
  document.getElementById("root")
);
