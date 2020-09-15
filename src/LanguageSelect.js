import React, { useContext, useState } from "react";

import { I18nContext } from "./i18n";
import EN from "./i18n/en";
import FR from "./i18n/fr";
import styled from "styled-components";
const StyledButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5rem;
  background: transparent;
  cursor: pointer;
  z-index: 10;
  color: #efece2;
  border: none;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  width: 18px;
  height: 18px;
`;

const LanguageSelect = (props) => {
  const { langCode, dispatch } = useContext(I18nContext);
  const [currentLanguage, setCurrentLanguage] = useState("fr");
  const lang = currentLanguage === "fr" ? "fr" : "en"
  const onFrenchSelect = (e) => {
    e.preventDefault();
    dispatch({ type: "setLanguage", payload: lang });
    setCurrentLanguage("en");
  };
  const onEnglishSelect = (e) => {
    e.preventDefault();

    dispatch({ type: "setLanguage", payload: lang });
    setCurrentLanguage("fr");
  };
  return currentLanguage === "fr" ? (
    <StyledButton onClick={(e) => onFrenchSelect(e)}>FR</StyledButton>
  ) : (
    <StyledButton onClick={(e) => onEnglishSelect(e)}>EN</StyledButton>
  );
};

export default LanguageSelect;
