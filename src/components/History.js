import MontrealLogo from "./Icons/MontrealLogo";
import QuebecLogo from "./Icons/QuebecLogo";
import React, { useContext } from "react";

import styled from "styled-components";
import { I18nContext } from "../i18n";
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 767px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 768px) {
    height: 849px;
  }
  order: 4;
`;
const SectionHeaderText = styled.div`
  font-size: 56px;
  line-height: 65px;
  text-align: center;
  color: #efece2;
  margin: 80px 0px;
  @media (max-width: 768px) {
    margin: 40px 0px;
  }
`;

const StyledLowerBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  @media (max-width: 768px) {
    width: 295px;
  }
`;
const StyledProjectHistory = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 0px 50px;
  width: 100%;
  color: #efece2;
  margin-bottom: 80px;
`;

const StyledImage = styled.div`
  margin-left: 50px;
`;
const StyledHistoryFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #efece2;
  height: 80px;
  width: 100%;
  padding: 15px;
`;

const History = () => {
  const { translate } = useContext(I18nContext);
  return (
    <StyledSection className="about-the-project">
      <SectionHeaderText>{translate("history.heading")}</SectionHeaderText>
      <StyledLowerBlockContainer>
        <StyledProjectHistory>
          {translate("history.description")}
        </StyledProjectHistory>
        <StyledHistoryFooter>
          <MontrealLogo />
          <StyledImage>
            <QuebecLogo />
          </StyledImage>
        </StyledHistoryFooter>
      </StyledLowerBlockContainer>
    </StyledSection>
  );
};

export default History;
