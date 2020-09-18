import React, { useContext } from "react";
import styled from "styled-components";
import { I18nContext } from "./i18n";
const TriniTrang = require("./images/TriniTrang.png");
const TriniTrangCloseUp = require("./images/Trini_CloseUp.png");

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  border-top: 1px solid #efece2;
  border-bottom: 1px solid #efece2;
`;
const StyledCloseUpContainer = styled.div`
  position: relative;
  height: 898px;
  width: 864px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #efece2;
  border-left: 1px solid #efece2;
  padding: 0px 84px;
`;

const MainPagePortrait = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const PortraitImage = styled.div`
  flex: 1 300px;
  min-width: 0;
  width: 50%;
  height: 100%;
  background-image: url(${TriniTrang});
  background-size: cover;
  background-repeat: no-repeat;
`;

const MainPagePortraitTextContainer = styled.div`
  flex: 1 300px;
  min-width: 0;
  height: 100%;
  max-height: 875px;
  font-family: "Karla", sans-serif;
  font-size: 40px;
  color: #efece2;
  background: #000;
`;

const MainDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px
  text-align: center;
  padding: 0px 50px;
 
`;
const MainPagePortraitText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

`;
const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 32px;
  align-items: center;
`;
const SectionHeaderText = styled.div`
  font-size: 56px;
  line-height: 65px;
  text-align: center;
`;
const SubheaderText = styled.div`
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 4px;
`;
const StyledArtistText = styled.span`
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 4px;
  border-bottom: 1px solid #efece2;
  color: #efece2;
  text-transform: uppercase;
  margin-bottom: 24px;
`;
const StyledEssentielsText = styled.div`
  font-size: 56px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 80px 0px;
  color: #efece2;
  border-bottom: 1px solid #efece2;
`;
const PhotoGridContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const ArtistPage = () => {
  const { translate } = useContext(I18nContext);
  return (
    <MainPagePortrait>
      <StyledSection className="main-portrait">
        <PortraitImage>
          {/*<img src={TriniTrang} width={700} />*/}
        </PortraitImage>
        <MainPagePortraitTextContainer>
          <MainPagePortraitText>
            <MainInfoContainer>
              <StyledArtistText>
                {translate("portrait1.artistText")}
              </StyledArtistText>
              <SectionHeaderText>
                {translate("portrait1.fullName")}
              </SectionHeaderText>
              <SubheaderText>{`${translate(
                "portrait1.occupation"
              )} ${String.fromCharCode(183)} ${translate(
                "portrait1.city"
              )}`}</SubheaderText>
            </MainInfoContainer>
            <MainDescriptionContainer>
              {translate("portrait1.description")}
            </MainDescriptionContainer>
          </MainPagePortraitText>
        </MainPagePortraitTextContainer>
      </StyledSection>
      {/*<StyledSection className="close-up-portrait">*/}
      {/*  <MainPagePortraitTextContainer>*/}
      {/*    <StyledCloseUpContainer>*/}
      {/*      <img src={TriniTrangCloseUp} />*/}
      {/*    </StyledCloseUpContainer>*/}
      {/*  </MainPagePortraitTextContainer>*/}
      {/*</StyledSection>*/}
      {/*<StyledSection className="les-essentiels">*/}
      {/*  <StyledEssentielsText>*/}
      {/*    {translate("the-essentials")}*/}
      {/*  </StyledEssentielsText>*/}

      {/*  <PhotoGridContainer>photos here</PhotoGridContainer>*/}
      {/*</StyledSection>*/}

      {/*<StyledSection className="about-the-project">*/}
      {/*  <MainPagePortraitTextContainer>*/}
      {/*    <SectionHeaderText>Le Project</SectionHeaderText>*/}
      {/*    <MainDescriptionContainer>*/}
      {/*      Lorem ipsum dolor sit amet id porta nibh venenatis cras sed felis*/}
      {/*      eget velit aliquet sagittis id consectetur purus ut faucibus*/}
      {/*      pulvinar elementum integer enim neque volutpat ac tincidunt vitae*/}
      {/*      semper quis lectus nulla at volutpat diam ut venenatis tellus in*/}
      {/*      metus vulputate eu scelerisque felis imperdiet proin fermentum leo*/}
      {/*      vel orci porta non pulvinar neque laoreet suspendisse interdum*/}
      {/*      consectetur libero id faucibus nisl tincidunt eget nullam non nisi*/}
      {/*      est sit amet facilisis magna etiam tempor orci eu lobortis elementum*/}
      {/*      nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis*/}
      {/*      enim ut tellus elementum sagittis vitae et leo duis ut diam quam*/}
      {/*      nulla porttitor massa id neque aliquam vestibulum morbi blandit*/}
      {/*      cursus risus at ultrices mi tempus imperdiet nulla malesuada*/}
      {/*      pellentesque elit eget gravida cum sociis natoque penatibus et*/}
      {/*      magnis dis parturient montes nascetur ridiculus mus mauris vita.*/}
      {/*      Ultricies leo integer malesuada nunc vel risus commodo viverra*/}
      {/*      maecenas accumsan lacus vel facilisis volutpat amet dictum sit amet*/}
      {/*      justo donec enim diam vulputate ut pharetra sit amet aliquam id diam*/}
      {/*      maecenas ultricies mi eget mauris pharetra et ultrices neque ornare*/}
      {/*      aenean euismod.*/}
      {/*    </MainDescriptionContainer>*/}
      {/*  </MainPagePortraitTextContainer>*/}
      {/*</StyledSection>*/}
    </MainPagePortrait>
  );
};

export default ArtistPage;
