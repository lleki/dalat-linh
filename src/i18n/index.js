import React, { useReducer } from "react";

import EN from "./en.json";
import FR from "./fr.json";

const translations = {
  en: EN,
  fr: FR,
};

const getTranslate = (langCode) => (key) => {
  const keys = key.split(".");
  let i = 0;
  let value = translations[langCode][keys[i]];
  while (value && i < keys.length - 1) {
    i += 1;
    value = value[keys[i]];
  }
  if (!value) {
    return key;
  }
  return value;
};

const initialState = {
  langCode: "en",
  translate: getTranslate("en"),
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setLanguage":
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload),
        };
      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};
