import React from "react";

import styled from "styled-components";
import theme from "../styles/theme";

interface StyledBurgerProps {
  open: boolean;
}

const BurgerWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    display: none;
  }
  padding: ${({ theme }) => theme.spacing[4]};
  z-index: 20;
`;

const StyledBurger = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ theme }) => theme.spacing[8]};
  height: ${({ theme }) => theme.spacing[8]};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: ${({ theme }) => theme.spacing[8]};
    height: ${({ theme }) => theme.spacing[1]};
    background: ${({ theme, open }) =>
      open ? theme.colors.complementary : theme.colors.complementary};
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;

    // turn from burger to "X":
    // top bar becomes \, bottom bar becomes /, and middle disappears
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger = ({ open, setOpen }: Props) => {
  // the three empty div's are the bars that make up the burger
  return (
    <BurgerWrapper>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </BurgerWrapper>
  );
};

export default Burger;
