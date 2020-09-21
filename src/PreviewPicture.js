import styled from "styled-components";
import { bool, func, array } from "prop-types";
import React from "react";
import { artistImages } from "./Constants";

const StyledImage = styled.img`
  width: 50%;
  max-width: 704px;
  height: auto;
    @media (max-width: 768px) {
    display:none;
  }
`;

const PreviewPicture = ({ previewArtist }) => {
  return (
    previewArtist && (
      <StyledImage
        src={require(`./images/${artistImages[previewArtist]}.png`)}
      />
    )
  );
};
PreviewPicture.propTypes = {
  open: bool.isRequired,
  setMenu: func.isRequired,
  artists: array.isRequired,
};
export default PreviewPicture;
