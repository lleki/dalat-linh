import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "../i18n";

const TriniTrang = require("../images/TriniTrang.png");
const Artist1 = require("../images/artist1.png");
const Artist2 = require("../images/artist2.png");
const Artist3 = require("../images/artist3.png");
const Artist4 = require("../images/artist4.png");
const Artist5 = require("../images/artist5.png");
const Artist6 = require("../images/artist6.png");
const Artist7 = require("../images/artist7.png");

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 1000px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #000;
  padding-top: 40px;
  @media (max-width: 768px) {
    height: 1120px;
    width: 375px;
  }
  order: 3;
`;

const StyledGalleryImage = styled.img`
  max-height: 100%;
  min-width: 100%;
  width: 269px;
  height: 345px;
  object-fit: cover;
  vertical-align: bottom;

  @media (max-width: 768px) {
    width: 295px;
    height: 378px;
  }
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const Styledli = styled.li`
  height: 378px;
  flex-grow: 1;
  margin: 40px;
  @media (max-width: 768px) {
    margin: 20px 40px;
  }
`;

const StyledEssentielsText = styled.div`
  font-size: 56px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding-top: 80px;
  color: #efece2;
  @media (max-width: 768px) {
    font-size: 26px;
    padding: 0px 46px 20px;
    line-height: 42px;
  }
`;

const Gallery = ({ showHeader }) => {
  const { translate } = useContext(I18nContext);
  return (
    <StyledSection>
      {showHeader && (
        <StyledEssentielsText>
          {translate("the-essentials")}
        </StyledEssentielsText>
      )}

      <StyledUl>
        <Styledli>
          <StyledGalleryImage src={Artist1} />
        </Styledli>
        <Styledli>
          <StyledGalleryImage src={Artist2} />
        </Styledli>
        <Styledli>
          <StyledGalleryImage src={Artist3} />
        </Styledli>
        <Styledli>
          <StyledGalleryImage src={Artist4} />
        </Styledli>
        <Styledli>
          <StyledGalleryImage src={Artist5} />
        </Styledli>
        <Styledli>
          <StyledGalleryImage src={Artist6} />
        </Styledli>
        <Styledli>
          <StyledGalleryImage src={Artist7} />
        </Styledli>
        <Styledli>
          <StyledGalleryImage src={TriniTrang} />
        </Styledli>
      </StyledUl>
    </StyledSection>
  );
};

export default Gallery;
