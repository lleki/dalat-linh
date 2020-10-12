import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nContextProvider } from "./i18n";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <I18nContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
