import React, { useContext } from "react";
import styled from "styled-components";

import Gallery from "./components/Gallery";
import { I18nContext } from "./i18n";
const StyledEssentielsText = styled.div`
  position: absolute;
  top: 0;
  height: 172px;
  margin: auto;
  width: 100%;
  font-size: 56px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding-top: 52px;
  color: #efece2;
  
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
const GalleryContainer = styled.div`
  position: absolute;
  top: 0;
  margin-top: 110px;
  width: 100%;
  @media (max-width: 1100px) {
    margin-top: 0px;
  }
  @media (max-width: 1000px) {
    margin-top: 200px;
  }
`;

const HomePage = () => {
  const { translate } = useContext(I18nContext);
  const scrollToTop = window.scrollTo(0, 0);
  return (
    <div>
      <StyledEssentielsText>{translate("the-essentials")}</StyledEssentielsText>
      <GalleryContainer>
        <Gallery showHeader={false} scrollToTop={scrollToTop} />
      </GalleryContainer>
    </div>
  );
};

export default HomePage;
