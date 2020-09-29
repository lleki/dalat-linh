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
  min-height: 100vh @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const StyledYellowSection = styled.section`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  flex-basis: 100%;
  // min-height: 100vh;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: #000;
  order: 1;
  @media (max-width: 768px) {
    flex-basis: 1;
  }
`;
const StyledSubSection = styled.section`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-basis: 100%;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: #000;
  order: 1;

  @media (max-width: 768px) {
    flex-basis: 1;
  }
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

const StyledCloseUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
`;

const StyledCloseUpImage = styled.img`
  flex: 1 300px;
  min-width: 0;
  width: 50%;
  height: auto;
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
`;

const MainDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  padding: 0px 50px;
  color: #efece2;
  max-height: 500px;
  overflow: auto;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    overflow: visible;
    max-height: none;
  }
`;

const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
  color: #efece2;
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
      <StyledYellowSection>
        <StyledImage src={require(`./images/${artistImages[artist.id]}.jpg`)} />
        <RightPanel>
          <MainInfoContainer>
            <SectionHeaderText>
              {translate(`${artist.name}.fullName`)}
            </SectionHeaderText>
            <SubheaderText>
              {translate(`${artist.name}.occupation-description`)}
              {String.fromCharCode(183)} {translate("pronoun")}:
              {translate(`${artist.name}.pronounName`)}
            </SubheaderText>
            <SubheaderText>
              <SiteWebText
                href={translate(`${artist.name}.siteweb`)}
                target="_blank"
              >
                {translate("websiteLabel")}
              </SiteWebText>
              &#8250;
              {translate(`${artist.name}.siteweb2`).length > 1 && (
                <SiteWebText
                  href={translate(`${artist.name}.siteweb2`)}
                  target="_blank"
                >
                  {`${translate("websiteLabel")}`}
                  <span>&#8250;</span>
                </SiteWebText>
              )}
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
        </RightPanel>
      </StyledYellowSection>
      <StyledSubSection>
        <StyledCloseUpContainer>
          <StyledCloseUpImage
            src={require(`./images/${artistImages[artist.id]}-closeup.jpg`)}
          />
        </StyledCloseUpContainer>
      </StyledSubSection>
      <StyledSubSection>
        <StyledCloseUpContainer>
          <StyledCloseUpImage
            src={require(`./images/${artistImages[artist.id]}-closeup2.jpg`)}
          />
        </StyledCloseUpContainer>
      </StyledSubSection>
      <StyledSubSection>
        <StyledGalleryWrapper>
          <Gallery showHeader scrollToTop={scrollToTop} />
        </StyledGalleryWrapper>
      </StyledSubSection>
      <StyledSubSection>
        <History />
      </StyledSubSection>
    </MainContainer>
  );
};

export default ArtistPage;
