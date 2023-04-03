import styled, { keyframes } from 'styled-components';
import theme from 'style/generalStyle';

const translate = keyframes`
from {
  transform: translateY(-130vh);
  opacity: 0.3;
}
to {
  transform: translateY(0);
  opacity: 1;
}
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
  animation: ${translate} 0.3s linear;
  position: absolute;
  width: -webkit-fill-available;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  position: fixed;

  background-color: #ebf3d4;

  z-index: 150;

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
