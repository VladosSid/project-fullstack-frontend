import styled from 'styled-components';
import theme from '../../style/generalStyle';

import MobileBg from "../../images/Auth/WelcomePageBgMobile.jpg";
import TabletBg from "../../images/Auth/WelcomePageBgTablet.jpg";
import DesktopBg from "../../images/Auth/WelcomePageBgDesktop.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 35px;
  background-image: url(${MobileBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: calc(100vw - 70px);  
  color: #fff;

  @media ${theme.device.tablet} {
    background-image: url(${TabletBg});
  }
  @media ${theme.device.desktop} {
    background-image: url(${DesktopBg});
  }
`