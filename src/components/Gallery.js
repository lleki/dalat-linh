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
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 768px) {
    flex-basis: column;
    height: 1120px;
  }
`;

const StyledGalleryImage = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Styledli = styled.li`
  height: 345px;
  flex-grow: 1;
  padding: 41px;
`;
const StyledLastLi = styled.li`
  flex-grow: 10;
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
    padding: 40px 46px 0px;
    line-height: 42px;
  }
`;
const PhotoGridContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Gallery = () => {
  const { translate } = useContext(I18nContext);
  return (
    <StyledSection>
      <StyledEssentielsText>{translate("the-essentials")}</StyledEssentielsText>

      <PhotoGridContainer>
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

          <StyledLastLi></StyledLastLi>
        </StyledUl>
      </PhotoGridContainer>
    </StyledSection>
  );
};

export default Gallery;
