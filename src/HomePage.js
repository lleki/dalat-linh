import React, { useContext } from "react";
import styled from "styled-components";

import Gallery from "./components/Gallery";
import { I18nContext } from "./i18n";
const StyledEssentielsText = styled.div`
  position: fixed;
  top: 0;
  height: 172px;
  margin: auto;
  width: 100%;
  font-size: 56px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding-top: 52px;
  color: #efece2;

  @media (max-width: 768px) {
    font-size: 26px;
    padding: 0px 46px 20px;
    line-height: 42px;
  }
`;

const HomePage = () => {
  const { translate } = useContext(I18nContext);
  return (
    <div>
      <StyledEssentielsText>{translate("the-essentials")}</StyledEssentielsText>
      <Gallery showHeader={false} />
    </div>
  );
};

export default HomePage;
