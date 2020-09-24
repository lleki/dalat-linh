import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "../i18n";
import { Link } from "react-router-dom";
// import { artistImages } from "../Constants";
const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 1000px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #000;
  padding-top: 40px;
  @media (max-width: 1550px) {
    min-height: 100%;
    flex-shrink: 0;
    height: 1120px;
  }
  @media (max-width: 768px) {
    min-height: 100%;
    flex-shrink: 0;
    height: 1120px;
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
  @media (max-width: 1440px) {
    width: 210px;
    height: 286px;
  }

  @media (max-width: 1000px) {
    width: 150px;
    height: 226px;
  }
  @media (max-width: 768px) {
    width: 295px;
    height: 378px;
  }
  @media (max-width: 400px) {
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
  @media (max-width: 1442px) {
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 960px) {
    max-width: 800px;
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const Styledli = styled.li`
  height: 378px;
  flex-grow: 1;
  margin: 40px;
  @media (max-width: 1440px) {
    margin: 20px;
    height: 276px;
  }
  @media (max-width: 1000px) {
    width: 150px;
    height: 226px;
    margin: 20px;
  }
  @media (max-width: 768px) {
    width: 295px;
    height: 378px;
  }
  @media (max-width: 400px) {
    width: 295px;
    height: 378px;
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
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  @media (max-width: 1440px) {
    width: 210px;
    height: 286px;
  }
  @media (max-width: 1000px) {
    width: 150px;
    height: 226px;

    @media (max-width: 768px) {
      width: 295px;
      height: 378px;
    }
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
  { id: 1, name: "richard" },
  { id: 2, name: "eli-tarek" },
  { id: 1, name: "richard" },
  { id: 2, name: "eli-tarek" },
  { id: 2, name: "eli-tarek" },
  { id: 3, name: "jodie-ann" },
  // { id: 4, name: "gabriella" },
  { id: 5, name: "estelle&moohk" },
  { id: 6, name: "rowan" },
  // { id: 7, name: "yolande" },
  // { id: 8, name: "shekh" },
];
const artistImages = {
  1: "richard",
  2: "eli-tarek",
  3: "jodie-ann",
  4: "gabriella",
  5: "estelle",
  6: "rowan",
  7: "yolande",
  8: "shekh",
};

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
                    src={require(`../images/${
                      artistImages[artist.id]
                    }-thumbnail.jpg`)}
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
