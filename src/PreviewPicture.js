import styled from "styled-components";
import React from "react";
import { artistImages } from "./Constants";

const StyledImage = styled.div`
position:absolute;
  background-image: url(${(props) => props.image})};
  width: 50%;
  height:100%;
  z-index:99;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    display:none;
  }

`;
const PreviewPicture = ({ previewArtist }) => {
  return (
    previewArtist && (
      <StyledImage
        image={require(`./images/${artistImages[previewArtist]}.png`)}
      ></StyledImage>
    )
  );
};

export default PreviewPicture;
