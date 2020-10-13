import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "../i18n";
import { Link } from "react-router-dom";
import { vietnamImages, photos } from "../Constants";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  padding-top: 40px;
`;

const StyledGalleryImage = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  max-width: 100%;
  border-radius: 10px;
  &:hover {
    opacity: 0.5;
  }
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-width: 1000px;
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
  width: 25%;
  padding: 10px;
  @media screen and (max-width: 1000px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    margin-bottom: 0;
    padding: 5px 10px;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  font-family: "Karla", sans-serif;
  font-size: 25px;
  border-radius: 10px;
  div {
    &:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }
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
  border-radius: 10px;
  border: 1px solid #fff;
`;

const Gallery = () => {
  const { translate } = useContext(I18nContext);
  const sortedPhotos = photos.sort((a, b) => a.name.localeCompare(b.name));
  const iconPath = process.env.PUBLIC_URL + '/images';

  return (
    <StyledSection>
      <StyledUl>
        {sortedPhotos.map((photo) => {
          return (
            <Styledli key={photo.id}>
              <Link to={"/" + photo.url}>
                <StyledWrapper>
                  <StyledGalleryImage
                    src={`${iconPath}/${vietnamImages[photo.id]}.jpg`}
                  />
                  <StyledOverlay>
                    <StyledCaption>
                      {translate(`${photo.name}.articleTitle`).toUpperCase()}
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
