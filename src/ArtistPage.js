import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "./i18n";
import Gallery from "./components/Gallery";
import History from "./components/History";

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
  min-height: 100vh;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: #000;
  order: 1;
`;
const StyledCloseUpContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  min-height: 100vh;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 768px) {
    flex-basis: column;
    height: 482px;
  }
  order: 2;
`;
const StyledGalleryWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  min-height: 100vh;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 768px) {
    flex-basis: column;
    height: 482px;
  }
  order: 2;
  overflow: auto;
`;

const StyledImage = styled.img`
  flex: none;
  height: 100vh;
  @media (max-width: 1280px) {
    flex: 1 500px;
    width: 50%;
    height: auto;
  }
  @media (max-width: 1000px) {
    flex: 1 500px;
    height: auto;
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
  flex: 1 500px;
  min-width: 0;
  height: 100%;
  max-height: 875px;
  font-family: "Karla", sans-serif;
  font-size: 40px;
  color: #efece2;
  background: #000;
  @media (max-width: 768px) {
    max-height: 60vh;
  }
`;

const MainDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  padding: 0px 50px;
  color: #efece2;
  overflow: auto;
`;

const MainPagePortraitText = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  @media (max-width: 768px) {
    height: 115%;
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
  margin: 4px;
  max-width: 70%;
`;
const SiteWebText = styled.a`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #efece2;
  text-decoration: none;
  text-transform: none;
  border-bottom: 1px solid #efece2;
  margin-left: 6px;
`;

const artistImages = {
  1: "richard",
  2: "eli-tarek",
  3: "jodie-ann",
  4: "gabriella",
  5: "estelle",
  6: "rowan",
  7: "yolande",
  8: "shekh",
};

const ArtistPage = ({ artist }) => {
  const { translate } = useContext(I18nContext);
  const scrollToTop = window.scrollTo(0, 0);
  return (
    <MainContainer>
      <StyledSection>
        <StyledImage src={require(`./images/${artistImages[artist.id]}.jpg`)} />
        <RightPanel>
          <MainPagePortraitText>
            <MainInfoContainer>
              <SectionHeaderText>
                {translate(`${artist.name}.fullName`)}
              </SectionHeaderText>
              <SubheaderText>
                {translate(`${artist.name}.occupation-description`)}{" "}
                {String.fromCharCode(183)} {translate("pronoun")}:{" "}
                {translate(`${artist.name}.pronounName`)}
              </SubheaderText>
              <SubheaderText>
                {" "}
                <SiteWebText
                  href={translate(`${artist.name}.siteweb`)}
                  target="_blank"
                >
                  {translate("websiteLabel")}
                </SiteWebText>{" "}
                &#8250;
                <SiteWebText href={translate(`${artist.name}.siteweb2`)}>
                  {translate("websiteLabel")}
                </SiteWebText>{" "}
                &#8250;
              </SubheaderText>
            </MainInfoContainer>
            <MainDescriptionContainer>
              <p>{translate(`${artist.name}.paragraph1-question`)}</p>
              <span>{translate(`${artist.name}.paragraph1-answer`)}</span>
              <p>{translate(`${artist.name}.paragraph2-question`)}</p>
              <span>{translate(`${artist.name}.paragraph2-answer`)}</span>
              <p>{translate(`${artist.name}.paragraph3-question`)}</p>
              <span>{translate(`${artist.name}.paragraph3-answer`)}</span>
              <p>{translate(`${artist.name}.paragraph4-question`)}</p>
              <span>{translate(`${artist.name}.paragraph4-answer`)}</span>
              <p>{translate(`${artist.name}.paragraph5-question`)}</p>
              <span>{translate(`${artist.name}.paragraph5-answer`)}</span>
              <p>{translate(`${artist.name}.paragraph6-question`)}</p>
              <span>{translate(`${artist.name}.paragraph6-answer`)}</span>
              <p>{translate(`${artist.name}.paragraph7-question`)}</p>
              <span>{translate(`${artist.name}.paragraph7-answer`)}</span>
            </MainDescriptionContainer>
          </MainPagePortraitText>
        </RightPanel>
      </StyledSection>
      <StyledCloseUpContainer>
        <StyledCloseUpImage
          src={require(`./images/${artistImages[artist.id]}-closeup.jpg`)}
        />
      </StyledCloseUpContainer>{" "}
      <StyledCloseUpContainer>
        <StyledCloseUpImage
          src={require(`./images/${artistImages[artist.id]}-closeup2.jpg`)}
        />
      </StyledCloseUpContainer>
      <StyledGalleryWrapper>
        <Gallery showHeader scrollToTop={scrollToTop} />
      </StyledGalleryWrapper>
      <StyledCloseUpContainer>
        <History />
      </StyledCloseUpContainer>
    </MainContainer>
  );
};

export default ArtistPage;
