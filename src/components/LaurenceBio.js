import styled from "styled-components";
import React, { useContext } from "react";
import { I18nContext } from "../i18n";
import assistant from "../images/assistant.jpg";
import laurence from "../images/laurence.jpg";

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
    flex-direction: column;
  }
`;

const StyledImage = styled.img`
  flex: none;
  width: 50%;
  height: auto;
  @media (max-width: 1000px) {
    flex: 1 300px;
    width: 100%;
    height: auto;
  }
  @media (max-width: 750px) {
    flex: 1 300px;
    width: 50%;
    height: auto;
  }
`;

const StyledAssistantImage = styled.img`
  flex: none;
  width: 70%;
  height: auto;
  flex: 1 500px;
  min-width: 0;
  @media (max-width: 500px) {
    width: 100%;
    height: auto;
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
`;
const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 200px;
  min-width: 0;
  height: 100%;
  max-height: 875px;
  font-family: "Karla", sans-serif;
  font-size: 40px;
  color: #efece2;
  background: #000;
`;
const AssistantPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 200px;
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
  text-align: justify;
  padding: 0px 50px;
  color: #efece2;
  max-width: 600px;
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

const LaurenceBio = () => {
  const { translate } = useContext(I18nContext);
  return (
    <MainContainer>
      <StyledSection>
        <StyledImage src={laurence} />
        <RightPanel>
          <MainPagePortraitText>
            <MainInfoContainer>
              <SectionHeaderText>
                {translate("laurence.fullName")}
              </SectionHeaderText>
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
              <SectionHeaderText>
                {translate("laurenceassistant.fullName")}
              </SectionHeaderText>
            </MainInfoContainer>
            <MainDescriptionContainer>
              {translate("laurenceassistant.description")}
            </MainDescriptionContainer>
          </MainPagePortraitText>
        </LeftPanel>
        <AssistantPhotoWrapper>
          <StyledAssistantImage src={assistant} />
        </AssistantPhotoWrapper>
      </StyledAssistanceSection>
    </MainContainer>
  );
};

export default LaurenceBio;
