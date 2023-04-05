import styled from 'styled-components';
import theme from 'style/generalStyle';

export const BurgerBtn = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;

  @media ${theme.device.desktop} {
    display: none;
  }
`;

export const BackdropMobileMenu = styled.div`
  @media ${theme.device.mobail} {
    padding: 20px 16px;
  }
  @media ${theme.device.tablet} {
    padding: 20px 30px;
  }

  nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CrossIcon = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
`;

export const Switcher = styled.button`
  width: 60px;
  height: 30px;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 18px;
  left: 18px;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;

  @media ${theme.device.desktop} {
    position: static;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
