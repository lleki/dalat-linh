import React, { useState } from "react";
import styled from "styled-components";
import { Burger, Menu, History } from "./components";
import HomePage from "./HomePage";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import ArtistPage from "./ArtistPage";

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
  const [open, setOpen] = useState(false);
  const [previewArtist, setPreviewArtist] = useState(null);
  const setMenu = (val) => {
    setOpen(val);
  };
  const setPreview = (artist) => {
    setPreviewArtist(artist);
  };
  const artists = [
    { id: 1, name: "buffy" },
    { id: 2, name: "cordelia" },
    { id: 3, name: "trini" },
    { id: 4, name: "faith" },
    { id: 5, name: "xander" },
    { id: 6, name: "willow" },
    { id: 7, name: "tara" },
    { id: 8, name: "rupert" },
    // { id: 9, name: "L'Artiste" },
  ];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <MainAppContainer>
          <Burger open={open} setOpen={setOpen} />
          <Menu
            open={open}
            setMenu={setMenu}
            artists={artists}
            setPreview={setPreview}
            previewArtist={previewArtist}
          />

          <Route key={"home"} exact path={"/"} component={() => <HomePage />} />
          <Route
            key={"history"}
            exact
            path={"/history"}
            component={() => <History />}
          />
          {artists.map((artist) => {
            return (
              <Route
                key={artist.id}
                exact
                path={"/" + artist.name}
                component={() => <ArtistPage key={artist.id} artist={artist} />}
              />
            );
          })}
        </MainAppContainer>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
