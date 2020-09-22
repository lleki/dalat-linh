import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "../i18n";
import { Link } from "react-router-dom";
import { artistImages } from "../Constants";
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
  max-width: 1500px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const Styledli = styled.li`
  height: 378px;
  flex-grow: 1;
  margin: 40px;
  @media (max-width: 768px) {
    margin: 20px 40px;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 269px;
  height: 345px;
  font-family: "Karla", sans-serif;
  font-size: 25px;
  div {
    &:hover {
      opacity: 1;
      background-color: rgba(0,0,0,0.5);
    }
  }
 
  @media (max-width: 768px) {
    width: 295px;
    height: 378px;
  }
`;

const StyledCaption = styled.span`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  border: 1px solid #fff;
 
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
                <StyledWrapper>
                  <StyledGalleryImage
                    src={require(`../images/${artistImages[artist.id]}.png`)}
                  />
                  <StyledOverlay>
                    <StyledCaption>
                      {translate(`${artist.name}.fullName`).toUpperCase()}
                    </StyledCaption>
                  </StyledOverlay>
                </StyledWrapper>
              </Link>
            </Styledli>
          );
        })}
      </StyledUl>
    </StyledSection>
  );
};

export default Gallery;
