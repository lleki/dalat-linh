import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { I18nContextProvider } from "./i18n";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import ArtistPage from "./ArtistPage";
ReactDOM.render(
  <React.StrictMode>
    <I18nContextProvider>
      <Router>
        <App />
      </Router>
    </I18nContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
