import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { I18nContextProvider } from "./i18n";
ReactDOM.render(
  <React.StrictMode>
    <I18nContextProvider>
      <App />
    </I18nContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
