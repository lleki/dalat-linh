import styled from "styled-components";
import React from "react";
// import { artistImages } from "./Constants";

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
const artistImages = {
  1: "richard",
  2: "eli-tarek",
  // 3: "jodie-ann",
  // 4: "gabriella",
  // 5: "estelle",
  // 6: "rowan",
  // 7: "yolande",
  // 8: "shekh",
  9: "laurence",
};

const PreviewPicture = ({ previewArtist }) => {
  return (
    previewArtist && (
      <StyledImage
        image={require(`./images/${artistImages[previewArtist]}.jpg`)}
      />
    )
  );
};

export default PreviewPicture;
