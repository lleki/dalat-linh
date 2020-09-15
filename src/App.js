import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import LanguageSelect from "./LanguageSelect";
import ArtistPage from "./ArtistPage";
import MainPage from "./MainPage";
import { I18nContext } from "./i18n";
import { Burger, Menu } from "./components";
import { StyledMenu } from "./components/Menu/Menu";

const MainAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  background: black;
  overflow-x: hidden;
  perspective: 2px;
`;
const App = () => {
  const { translate } = useContext(I18nContext);
  const [open, setOpen] = useState(false);
  const artists = ["Trini_Trang"]
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <MainAppContainer>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} artists={artists}/>
          <LanguageSelect />

          <Route path="/" component={MainPage} />
            {artists.map(artist =>{
                return <Route exact path={"/"+ artist} component={ArtistPage} />
            }
            )}

        </MainAppContainer>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
