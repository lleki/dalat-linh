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
const StyledMainBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;
const IntroductionParagraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 500px;
  padding: 20px;
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
`;
const StyledGalleryText = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 172px;
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
    padding: 0px 46px 20px;
    top: 100px;
  }
  @media (max-width: 768px) {
    font-size: 26px;
    padding: 0px 46px 20px;
    top: 100px;
  }
`;

const HomePage = () => {
  const { translate } = useContext(I18nContext);
  const scrollToTop = window.scrollTo(0, 0);
  return (
    <StyledHomePage>
      <StyledGalleryText>{translate("the-gallery")}</StyledGalleryText>
      <StyledMainBody>
        <IntroductionParagraph>
          {translate("introduction")}
        </IntroductionParagraph>
        <Gallery showHeader={false} scrollToTop={scrollToTop} />
      </StyledMainBody>
    </StyledHomePage>
  );
};

export default HomePage;
