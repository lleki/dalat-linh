import React, { useState } from "react";
import styled from "styled-components";
import { Burger, Menu, History } from "./components";
import HomePage from "./HomePage";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import Article from "./components/Article";
import ScrollToTop from "./ScrollToTop";

const MainAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: "Oswald", sans-serif;
  font-size: 40px;
  background: ${({ theme }) => theme.primaryLight};
  overflow-x: hidden;
  perspective: 2px;
`;
const App = () => {
  const [open, setOpen] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const setMenu = (val) => {
    setOpen(val);
  };
  const setPreview = (photo) => {
    setPreviewPhoto(photo);
  };
  const photos = [
    { id: 1, name: "vietnam1", label: "Snapshot Cuisine", url: "vietnam1" },
    { id: 2, name: "vietnam2", label: "Unfair Prices", url: "vietnam2" },
    { id: 3, name: "vietnam3", label: "Labour of Love", url: "vietnam3" },
    {
      id: 4,
      name: "vietnam4",
      label: "Tradition and Communication",
      url: "vietnam4",
    },
    { id: 5, name: "vietnam5", label: "Industrialisation", url: "vietnam5" },
    { id: 6, name: "vietnam6", label: "Lost Art", url: "vietnam6" },
    { id: 7, name: "vietnam7", label: "Regional Differences", url: "vietnam7" },
    { id: 8, name: "vietnam8", label: "About Me", url: "vietnam8" },
  ];
  const sortedPhotos = photos.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollToTop>
        <Switch>
          <MainAppContainer>
            <Burger open={open} setOpen={setOpen} />
            <Menu
              open={open}
              setMenu={setMenu}
              photos={sortedPhotos}
              setPreview={setPreview}
              previewPhoto={previewPhoto}
            />

            <Route
              key={"home"}
              exact
              path={"/"}
              component={() => <HomePage />}
            />
            <Route
              key={"history"}
              exact
              path={"/history"}
              component={() => <History />}
            />
            {photos.map((photo) => {
              return (
                <Route
                  key={photo.id}
                  exact
                  path={"/" + photo.url}
                  component={() => <Article key={photo.id} photo={photo} />}
                />
              );
            })}
          </MainAppContainer>
        </Switch>
      </ScrollToTop>
    </ThemeProvider>
  );
};

export default App;
