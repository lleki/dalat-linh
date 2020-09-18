import styled from "styled-components";
import { bool } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  width: 50%;
  text-align: left;
  padding: 14px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
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
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
      text-decoration: underline;
      
    }
  }
`;

const Menu = ({ open, artists }) => {
  return (
    <StyledMenu open={open}>
      {artists.map((artist) => (
        <Link key={artist.id} to={"/" + artist.name}>
          {artist.name}
        </Link>
      ))}
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
