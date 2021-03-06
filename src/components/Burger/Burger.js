import styled from "styled-components";
import React from "react";
import { bool, func } from "prop-types";
import LanguageSelect from "../../LanguageSelect";

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BurgerContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: flex-end;
  z-index: 99;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const StyledBurger = styled.div`
  transition: top 0.3s;
  right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 92px;
  padding: 10px;
  background: ${({ theme }) => theme.primaryLight};
  cursor: pointer;
  z-index: 99;
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    padding: 10px;
  }
  &:focus {
    outline: none;
  }

  div {
    width: 44px;
    height: 2px;
    margin: 2px 0px;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) =>
        open ? "translate(7px,-10px) rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translate(0px,10px)" : "rotate(0)"};
    }
    @media (max-width: 768px) {
      width: 22px;
      :first-child {
        transform: ${({ open }) =>
          open ? "translate(4px,-2px) rotate(45deg)" : "rotate(0)"};
      }
      :nth-child(3) {
        transform: ${({ open }) =>
          open ? "rotate(-45deg) translate(2px,3px)" : "rotate(0)"};
      }
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerContainer>
      <RightSide>
        <LanguageSelect isOpen={open} />
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </RightSide>
    </BurgerContainer>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
