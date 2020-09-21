import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "./i18n";
import Gallery from "./components/Gallery";
import History from "./components/History";
import {artistImages} from "./Constants";


const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 768px) {
    height: 1120px;
  }
  order: 1;
`;
const StyledCloseUpContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 768px) {
    flex-basis: column;
    height: 482px;
  }
  order: 2;
`;

const StyledImage = styled.img`
  flex: none;
  height: 100%;
  @media (max-width: 768px) {
    flex: 1 300px;
    width: 50%;
    height: 500px;
  }
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
  max-width: 500px;
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

const ArtistPage = ({ artist }) => {
  const { translate } = useContext(I18nContext);

  return (
    <MainContainer>
      <StyledSection>
          <StyledImage
              src={require(`./images/${artistImages[artist.id]}.png`)}
          />
        <RightPanel>
          <MainPagePortraitText>
            <MainInfoContainer>
              <StyledArtistText>
                {translate(`${artist.name}.biography`)}
              </StyledArtistText>
              <SectionHeaderText>
                {translate(`${artist.name}.fullName`)}
              </SectionHeaderText>
              <SubheaderText>{`${translate(
                `${artist.name}.occupation`
              )} ${String.fromCharCode(183)} ${translate(
                `${artist.name}.city`
              )}`}</SubheaderText>
            </MainInfoContainer>
            <MainDescriptionContainer>
              {translate(`${artist.name}.description`)}
            </MainDescriptionContainer>
          </MainPagePortraitText>
        </RightPanel>
      </StyledSection>
      <StyledCloseUpContainer>
          <StyledCloseUpImage
              src={require(`./images/${artistImages[artist.id]}-closeup.png`)}
          />
      </StyledCloseUpContainer>
      <Gallery showHeader />
      <History />
    </MainContainer>
  );
};

export default ArtistPage;
