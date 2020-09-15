import React, { useReducer } from "react";

import EN from "./en.json";
import FR from "./fr.json";

// To make it easier to read from JSON files
const translations = {
  en: EN,
  fr: FR,
};

// This function will be used to create `translate` function for the context
// const getTranslate = (langCode) => (key) => translations[langCode][key] || key;

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

/* We will have two things in our context state,
langCode will be the current language of the page
and translate will be the method to translate keys
into meaningful texts. Default language will be English */
const initialState = {
  langCode: "en",
  translate: getTranslate("en"),
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
  /* This is where magic starts to happen. We're creating
    a reducer to manage the global state which will sit in
    I18nContext. For now, the only action we will have
    is setting language */
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

  /* useReducer hook receives a reducer and an initialState to
    return the current state object with a dispatch method to
    dispatch actions. */
  const [state, dispatch] = useReducer(reducer, initialState);

  /* We're Providing state object (langCode and translate method
    in this case) and also the dispatch for the children components */
  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};