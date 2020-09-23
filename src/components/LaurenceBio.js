import styled from "styled-components";
import React, { useContext } from "react";
import { I18nContext } from "../i18n";

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
`;
const StyledAssistanceSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 768px) {
    height: 1120px;
    flex-direction: column-reverse;
    margin-bottomL 50px;
  }
  
`;

const StyledImage = styled.img`
  flex: none;
  height: 100%;
  width: 50%;
  @media (max-width: 768px) {
    flex: 1 300px;
    width: 50%;
    height: 500px;
  }
`;
const StyledAssistantImage = styled.img`
  flex: none;
  height: 100%;
  width: 50%;
  @media (max-width: 768px) {
    flex: 1 300px;
    width: 100%;
    height: 500px;
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
const LeftPanel = styled.div`
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
  @media (max-width: 768px) {
    margin: 16px;
  }
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

const LaurenceBio = () => {
  const { translate } = useContext(I18nContext);
  return (
    <div>
      <StyledSection>
        <StyledImage src={require(`../images/laurence.png`)} />
        <RightPanel>
          <MainPagePortraitText>
            <MainInfoContainer>
              <StyledArtistText>
                {translate("laurence.biography")}
              </StyledArtistText>
              <SectionHeaderText>
                {translate("laurence.fullName")}
              </SectionHeaderText>
              <SubheaderText>{`${translate(
                "laurence.occupation"
              )} ${String.fromCharCode(183)} ${translate(
                "laurence.city"
              )}`}</SubheaderText>
            </MainInfoContainer>
            <MainDescriptionContainer>
              {translate("laurence.description")}
            </MainDescriptionContainer>
          </MainPagePortraitText>
        </RightPanel>
      </StyledSection>
      <StyledAssistanceSection>
        <LeftPanel>
          <MainPagePortraitText>
            <MainInfoContainer>
              <StyledArtistText>
                {translate("laurenceassistant.biography")}
              </StyledArtistText>
              <SectionHeaderText>
                {translate("laurenceassistant.fullName")}
              </SectionHeaderText>
              <SubheaderText>{`${translate(
                "laurenceassistant.occupation"
              )} ${String.fromCharCode(183)} ${translate(
                "laurenceassistant.city"
              )}`}</SubheaderText>
            </MainInfoContainer>
            <MainDescriptionContainer>
              {translate("laurenceassistant.description")}
            </MainDescriptionContainer>
          </MainPagePortraitText>
        </LeftPanel>
        <StyledAssistantImage src={require(`../images/laurence.png`)} />
      </StyledAssistanceSection>
    </div>
  );
};

export default LaurenceBio;
