import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "./i18n";

import Gallery from "./components/Gallery";
import History from "./components/History";
const TriniTrang = require("./images/TriniTrang.png");
const TriniTrangCloseUp = require("./images/Trini_CloseUp.png");

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 1000px;
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 768px) {
    flex-basis: column;
    height: 1120px;
  }
`;

const StyledImage = styled.img`
  flex: 1 300px;
  min-width: 0;
  width: 50%;
  height: auto;
`;

const StyledCloseUpImage = styled.img`
  flex: 1 300px;
  min-width: 0;
  width: 100%;
  height: auto;

  max-width: 704px;
  max-height: 898px;
  @media (max-width: 768px) {
    order: 1;
  }
`;
const StyledBuffer = styled.div`
  min-width: 0;
  flex-basis: 200px;
  @media (max-width: 768px) {
    flex-basis: auto;
  }
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 300px;
  min-width: 0;
  height: 100%;
  max-height: 875px;
  font-family: "Karla", sans-serif;
  font-size: 40px;
  color: #efece2;
  background: #000;
`;

const MainDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 0px 50px;
  color: #efece2;
`;

const MainPagePortraitText = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 32px 0px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 28px 0px;
  }
`;
const SectionHeaderText = styled.div`
  font-size: 56px;
  line-height: 65px;
  text-align: center;
  color: #efece2;
  margin: 40px 12px;
  @media (max-width: 768px) {
    margin: 16px 12px;
  }
`;
const SubheaderText = styled.div`
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 4px;
`;
const StyledArtistText = styled.span`
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 4px;
  border-bottom: 1px solid #efece2;
  color: #efece2;
  text-transform: uppercase;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    flex-basis: column;
    margin-bottom: 16px;
  }
`;

const ArtistPage = () => {
  const { translate } = useContext(I18nContext);
  return (
    <MainContainer>
      <StyledSection>
        <StyledImage src={TriniTrang} />
        <RightPanel>
          <MainPagePortraitText>
            <MainInfoContainer>
              <StyledArtistText>
                {translate("portrait1.biography")}
              </StyledArtistText>
              <SectionHeaderText>
                {translate("portrait1.fullName")}
              </SectionHeaderText>
              <SubheaderText>{`${translate(
                "portrait1.occupation"
              )} ${String.fromCharCode(183)} ${translate(
                "portrait1.city"
              )}`}</SubheaderText>
            </MainInfoContainer>
            <MainDescriptionContainer>
              {translate("portrait1.description")}
            </MainDescriptionContainer>
          </MainPagePortraitText>
        </RightPanel>
      </StyledSection>
      <StyledSection>
        <StyledBuffer />
        <StyledCloseUpImage src={TriniTrangCloseUp} />
        <StyledBuffer />
      </StyledSection>

      <Gallery />

      <History />
    </MainContainer>
  );
};

export default ArtistPage;
