import React, { useContext } from "react";

import { I18nContext } from "./i18n";

const LanguageSelect = (props) => {
  /* Another hook here: useContext will receive a Context
    and return anything provided in the Provider */
  const { langCode, dispatch } = useContext(I18nContext);

  /* We will dispatch an action to set the language with the
    value of <select /> component. This will also change the
    translate method in the context to translate keys into
    the language we select */
  const onLanguageSelect = (e) =>
    dispatch({ type: "setLanguage", payload: e.target.value });

  const renderOption = (code) => (
    <option value={code} selected={code === langCode}>
      {code}
    </option>
  );

  return (
    <Button onChange={onLanguageSelect}>
      {renderOption("en")}
      {renderOption("fr")}
    </Button>
  );
};

export default LanguageSelect;
