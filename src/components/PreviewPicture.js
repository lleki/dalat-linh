import styled from "styled-components";
import React from "react";
import { vietnamImages } from "../Constants";

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

const PreviewPicture = ({ previewPhoto }) => {
    const iconPath = process.env.PUBLIC_URL + '/images';
  return (
    previewPhoto && (
      <StyledImage

          image={`${iconPath}/${vietnamImages[previewPhoto]}.jpg`}
      />
    )
  );
};

export default PreviewPicture;
