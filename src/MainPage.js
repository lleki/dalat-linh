import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "./i18n";
const MainPagePortrait = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const MainPage = () => {
  const { translate } = useContext(I18nContext);
  return <MainPagePortrait>{translate("mainpage")}</MainPagePortrait>;
};

export default MainPage;
