import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "../i18n";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  // min-height: 100vh;
  // flex-shrink: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background: ${({ theme }) => theme.primaryLight};
  order: 3;
  @media (max-width: 1200px) {
    margin-top: 100px;
  }
`;
const SectionHeaderText = styled.div`
  font-size: 56px;
  line-height: 65px;
  text-align: center;
  color: ${({ theme }) => theme.primaryDark};
  margin: 80px 0px;
  @media (max-width: 768px) {
    margin: 40px 0px;
  }
`;

const StyledLowerBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  text-align: justify;
  padding: 0px 50px;
  width: 100%;
  color: ${({ theme }) => theme.primaryDark};
  margin-bottom: 30px;
  @media (max-width: 450px) {
    width: 360px;
    font-size: 20px;
    padding: 0px 20px;
  }
`;

const History = () => {
  const { translate } = useContext(I18nContext);
  return (
    <StyledSection className="about-the-project">
      <SectionHeaderText>{translate("history.heading")}</SectionHeaderText>
      <StyledLowerBlockContainer>
        <StyledParagraph>{translate("introduction")}</StyledParagraph>

      </StyledLowerBlockContainer>
    </StyledSection>
  );
};

export default History;
