import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "../i18n";
import { Link } from "react-router-dom";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column;
  // height: 1000px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  padding-top: 40px;
  // @media (max-width: 1550px) {
  //   min-height: 100%;
  //   flex-shrink: 0;
  //   height: 1120px;
  // }
  // @media (max-width: 768px) {
  //   min-height: 100%;
  //   flex-shrink: 0;
  //   height: 1120px;
  // }
  // order: 3;
`;

const StyledGalleryImage = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  max-width:100%;
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

const StyledGalleryHeader = styled.div`
  font-size: 56px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding-top: 80px;
  color: ${({ theme }) => theme.primaryDark};
  @media (max-width: 768px) {
    font-size: 26px;
    padding: 0px 46px 20px;
    line-height: 42px;
  }
`;

const photo = [
  { id: 1, name: "vietnam1", url: "vietnam1" },
  { id: 2, name: "vietnam2", url: "vietnam2" },
  { id: 3, name: "vietnam3", url: "vietnam3" },
  { id: 4, name: "vietnam4", url: "vietnam4" },
  { id: 5, name: "vietnam5", url: "vietnam5" },
  { id: 6, name: "vietnam6", url: "vietnam6" },
  { id: 7, name: "vietnam7", url: "vietnam7" },
  { id: 8, name: "vietnam8", url: "vietnam8" },
];
const vietnamImages = {
  1: "vietnam1",
  2: "vietnam2",
  3: "vietnam3",
  4: "vietnam4",
  5: "vietnam5",
  6: "vietnam6",
  7: "vietnam7",
  8: "vietnam8",
};

const Gallery = ({ showHeader, scrollToTop }) => {
  const { translate } = useContext(I18nContext);
  const sortedPhotos = photo.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <StyledSection>
      <StyledUl>
        {sortedPhotos.map((photo) => {
          return (
            <Styledli>
              <Link
                key={photo.id}
                to={"/" + photo.url}
                onClick={() => scrollToTop()}
              >
                <StyledWrapper>
                  <StyledGalleryImage
                    src={require(`../images/${vietnamImages[photo.id]}.jpg`)}
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
