import React, { useContext, useState } from "react";

import { I18nContext } from "./i18n";

import styled from "styled-components";
const StyledButton = styled.div`
  background: transparent;
  cursor: pointer;
  z-index: 99;
  color: #efece2;
  border: none;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-right: 36px;
  color: ${({ open }) => open && "#000"};
  @media (max-width: 768px) {
    color: #000;

    display: ${({ open }) => (open ? "inline-block" : "none")};
  }
`;

const LanguageSelect = ({ isOpen }) => {
  const { dispatch } = useContext(I18nContext);
  const [currentLanguage, setCurrentLanguage] = useState("fr");
  const lang = currentLanguage === "fr" ? "fr" : "en";
  const onFrenchSelect = (e) => {
    dispatch({ type: "setLanguage", payload: lang });
    setCurrentLanguage("en");
  };
  const onEnglishSelect = (e) => {
    dispatch({ type: "setLanguage", payload: lang });
    setCurrentLanguage("fr");
  };

  return currentLanguage === "fr" ? (
    <StyledButton open={isOpen} onClick={(e) => onFrenchSelect(e)}>
      FR
    </StyledButton>
  ) : (
    <StyledButton open={isOpen} onClick={(e) => onEnglishSelect(e)}>
      EN
    </StyledButton>
  );
};

export default LanguageSelect;
