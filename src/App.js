import React, { useContext } from "react";
import styled from "styled-components";
import LanguageSelect from "./LanguageSelect";
import { I18nContext } from "./i18n";
const MainAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
`;
const HeaderContainer = styled.div`
  width: 30%;
  height: 40px;
  background: color;
`;
const MainPagePortrait = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
const PortraitImage = styled.div`
  width: 50%;
  background: blue;
`;

const MainPagePortraitTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
`;
const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
`;
const MainDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const App = () => {
  const { translate } = useContext(I18nContext);
  return (
    <MainAppContainer>
      <HeaderContainer>
        <LanguageSelect />
      </HeaderContainer>
      <MainPagePortrait>
        <PortraitImage></PortraitImage>
        <MainPagePortraitTextContainer>
          <MainInfoContainer>
            <p>{translate("portrait1.fullName")}</p>
            <p> {translate("portrait1.occupation")}</p>
            <p> {translate("portrait1.city")}</p>
          </MainInfoContainer>
          <MainDescriptionContainer>
            {translate("portrait1.description")}
          </MainDescriptionContainer>
        </MainPagePortraitTextContainer>
      </MainPagePortrait>
    </MainAppContainer>
  );
};

export default App;
