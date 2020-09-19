import MontrealLogo from "./Icons/MontrealLogo";
import QuebecLogo from "./Icons/QuebecLogo";
import React, { useContext } from "react";

import styled from "styled-components";
import { I18nContext } from "../i18n";
const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 800px;
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 768px) {
    flex-basis: column;
    height: 1120px;
  }
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
const StyledProjectHistory = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 0px 50px;
  color: #efece2;
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

const History = () => {
  const { translate } = useContext(I18nContext);
  return (
    <StyledSection className="about-the-project">
      <SectionHeaderText>{translate("history.heading")}</SectionHeaderText>
      <StyledProjectHistory>
        {translate("history.description")}
      </StyledProjectHistory>
      <StyledHistoryFooter>
        <MontrealLogo />
        <QuebecLogo />
      </StyledHistoryFooter>
    </StyledSection>
  );
};

export default History;
