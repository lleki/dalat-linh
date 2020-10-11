import styled from "styled-components";
import React from "react";

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

const PreviewPicture = ({ previewPhoto }) => {
  return (
    previewPhoto && (
      <StyledImage
        image={require(`./images/${vietnamImages[previewPhoto]}.jpg`)}
      />
    )
  );
};

export default PreviewPicture;
