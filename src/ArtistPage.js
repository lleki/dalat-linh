import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "./i18n";
import QuebecLogo from "./components/Icons/QuebecLogo";
import MontrealLogo from "./components/Icons/MontrealLogo";
const TriniTrang = require("./images/TriniTrang.png");
const TriniTrangCloseUp = require("./images/Trini_CloseUp.png");

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 768px) {
    flex-basis: column;
    height: 1120px;
  }
`;
const MainPagePortrait = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
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
const StyledProjectHistory = styled.div`
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
const StyledEssentielsText = styled.div`
  font-size: 56px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 80px 0px;
  color: #efece2;
  border-bottom: 1px solid #efece2;
`;
const PhotoGridContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const StyledHistoryFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #efece2;
  height: 80px;
  width: 100%;
  padding: 15px;
`;

const ArtistPage = () => {
  const { translate } = useContext(I18nContext);
  return (
    <MainPagePortrait>
      <StyledSection className="main-portrait">
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

      {/*<StyledSection>*/}
      {/*  <StyledEssentielsText>*/}
      {/*    {translate("the-essentials")}*/}
      {/*  </StyledEssentielsText>*/}

      {/*/!*  <PhotoGridContainer>photos here</PhotoGridContainer>*!/*/}
      {/*</StyledSection>*/}

      <StyledSection className="about-the-project">
        <StyledBuffer />
        <SectionHeaderText>Le Project</SectionHeaderText>
        <StyledProjectHistory>
          Lorem ipsum dolor sit amet id porta nibh venenatis cras sed felis eget
          velit aliquet sagittis id consectetur purus ut faucibus pulvinar
          elementum integer enim neque volutpat ac tincidunt vitae semaliquam
          vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet
          nulla malesuada pellentesque elit eget gravida cum sociis natoque
          penatibus et magnis dis parturient montes nascetur ridiculus mus
          mauris vita. Ultricies leo integer malesuada nunc vel risus commodo
          viverra maecenas accumsan lacus vel facilisis volutpat amet dictum sit
          amet justo donec enim diam vulputate ut pharetra sit amet aliquam id
          diam maecenas ultricies mi eget mauris pharetra et ultrices neque
          ornare aenean euismod.
        </StyledProjectHistory>
        <StyledHistoryFooter>
          <MontrealLogo />
          <QuebecLogo />
        </StyledHistoryFooter>
      </StyledSection>
    </MainPagePortrait>
  );
};

export default ArtistPage;
