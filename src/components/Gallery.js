import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "../i18n";
import { Link, Route } from "react-router-dom";

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
   min-height: 100%;
    flex-shrink: 0;
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
  &:hover {
    opacity: 0.5;
  }
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
const artists = [
  { id: 1, name: "buffy" },
  { id: 2, name: "cordelia" },
  { id: 3, name: "trini" },
  { id: 4, name: "faith" },
  { id: 5, name: "xander" },
  { id: 6, name: "willow" },
  { id: 7, name: "tara" },
  { id: 8, name: "rupert" },
  // { id: 9, name: "L'Artiste" },
];
const artistImages = {
  "1": "buffy",
  "2": "cordelia",
  "3": "trini",
  "4": "faith",
  "5": "xander",
  "6": "willow",
  "7": "tara",
  "8": "rupert",
}

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
        {artists.map((artist) => {
          return (
            <Styledli>
              <Link key={artist.id} to={"/" + artist.name}>
                <StyledGalleryImage src={require(`../images/${artistImages[artist.id]}.png`)} />
              </Link>
            </Styledli>
          );
        })}
      </StyledUl>
    </StyledSection>
  );
};

export default Gallery;
