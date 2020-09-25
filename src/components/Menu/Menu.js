import styled from "styled-components";
import { bool, func, array } from "prop-types";
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { I18nContext } from "../../i18n";
import PreviewPicture from "../../PreviewPicture";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  width: 50%;
  text-align: left;
  padding: 80px 14px 14px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 60;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 36px;
    line-height: 36px;
    text-transform: uppercase;
    padding: 14px;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 22px;
      text-align: center;
      line-height: 28px;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
      text-decoration: underline;
    }
  }
`;

const Menu = ({ open, setMenu, artists, setPreview, previewArtist }) => {
  const { translate } = useContext(I18nContext);
  return (
    <Fragment>
      {open && <PreviewPicture previewArtist={previewArtist} />}
      <StyledMenu open={open}>
        <Link to={"/"} onClick={() => setMenu(false)}>
          {translate("home")}
        </Link>
        <Link to={"/history"} onClick={() => setMenu(false)}>
          {translate("project")}
        </Link>
        {artists.map((artist) => (
          <div
            key={artist.id}
            onMouseEnter={() => setPreview(artist.id)}
            onClick={() => setMenu(false)}
          >
            {artist.name === "eli-tarek" ? <Link to={"/" + artist.url}>Eli Tarek</Link> : <Link to={"/" + artist.url}>{artist.name}</Link>}

          </div>
        ))}
        <div onMouseEnter={() => setPreview(9)} onClick={() => setMenu(false)}>
          <Link to={"/laurence"} onClick={() => setMenu(false)}>
            {translate("theartist")}
          </Link>
        </div>
      </StyledMenu>
    </Fragment>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
  setMenu: func.isRequired,
  artists: array.isRequired,
};
export default Menu;
