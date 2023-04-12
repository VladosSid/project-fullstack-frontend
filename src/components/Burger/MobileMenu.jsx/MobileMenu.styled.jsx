import styled from 'styled-components';
import theme from 'style/generalStyle';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  position: fixed;

  background-color: #ebf3d4;
  background-image: url(../../../images/Header/spinach.png);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  z-index: 150;
  opacity: 1;
  transform: ${props =>
    props.isOpen === false ? 'translateY(-120vh)' : 'translateY(0)'};
  transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

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
  margin: 0 auto;
  @media ${theme.device.mobail} {
    width: 335px;
    padding: 20px 16px;
  }
  @media ${theme.device.tablet} {
    width: 580px;
    padding: 20px 30px;
  }

  nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

export const HeaderSwitcher = styled.button`
  display: none;
  width: 60px;
  height: 30px;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: none;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media ${theme.device.desktop} {
    display: block;
  }
`;
