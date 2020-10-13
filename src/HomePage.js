import React, { useContext } from "react";
import styled from "styled-components";
import Gallery from "./components/Gallery";
import { I18nContext } from "./i18n";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const StyledSubSection = styled.section`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-basis: 100%;
  flex-shrink: 0;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  order: 2;
  @media (max-width: 768px) {
    flex-basis: 1;
  }
`;
const IntroductionParagraph = styled.div`
 display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-basis: 100%;
  flex-shrink: 0;
 align-items: center;
  justify-content: center;
  width: 80%;
  margin:auto;
  padding: 20px;
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
  text-align: justify;
    @media (max-width: 768px) {
    width: 90%;
    font-size: 20px;
  }
`;
const StyledHeaderText = styled.section`
  display: flex;
  flex: 1;
  flex-shrink: 0;
  min-height: 172px;
   align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  font-size: 56px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 52px;
  color: ${({ theme }) => theme.primaryDark};
  font-family: "Oswald", sans-serif;
  @media (max-width: 1070px) {
    font-size: 26px;
    padding: 20px;
  }
`;

const HomePage = () => {
  const { translate } = useContext(I18nContext);

  return (
    <StyledHomePage>
      <StyledHeaderText>{translate("the-gallery")}</StyledHeaderText>
      <IntroductionParagraph>
        {translate("introduction")}

      </IntroductionParagraph>

      <StyledSubSection>
        <Gallery showHeader={false} />
      </StyledSubSection>
    </StyledHomePage>
  );
};

export default HomePage;
