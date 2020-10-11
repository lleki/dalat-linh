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
  color: ${({ theme }) => theme.primaryDark};
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
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
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
  background: ${({ theme }) => theme.primaryLight};
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
  background: ${({ theme }) => theme.primaryLight};
  @media (max-width: 768px) {
    flex-basis: column;
    height: 482px;
  }
  order: 2;
  overflow: auto;
`;

const StyledImage = styled.img`
  flex: none;
  flex: 1 500px;
  width: 50%;
  height: auto;
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
  color: ${({ theme }) => theme.primaryDark};
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
  color: ${({ theme }) => theme.primaryDark};
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

const vietnamImages = {
  1: "vietnam1",
  2: "vietnam2",
  3: "vietnam3",
  4: "vietnam4",
  5: "vietnam5",
  6: "vietnam6",
};
const ArtistPage = ({ photo }) => {
  const { translate } = useContext(I18nContext);
  const scrollToTop = window.scrollTo(0, 0);
  return (
    <MainContainer>
      <StyledYellowSection>
        <StyledImage src={require(`./images/${vietnamImages[photo.id]}.jpg`)} />
        <RightPanel>
          <MainInfoContainer>
            <SectionHeaderText>
              {translate(`${photo.name}.articleTitle`)}
            </SectionHeaderText>
          </MainInfoContainer>
          <MainDescriptionContainer>
            {translate(`${photo.name}.description`)}
          </MainDescriptionContainer>
        </RightPanel>
      </StyledYellowSection>
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
