import styled from 'styled-components';
import theme from '../../style/generalStyle';

import MobileBg from "../../images/Auth/WelcomePageBgMobile.jpg";
import TabletBg from "../../images/Auth/WelcomePageBgTablet.jpg";
import DesktopBg from "../../images/Auth/WelcomePageBgDesktop.jpg";

export const Container = styled.div`
  padding: 0 35px;
  background-image: url(${MobileBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;  
  color: #fff;

  @media ${theme.device.tablet} {
    background-image: url(${TabletBg});
  }
  @media ${theme.device.desktop} {
    background-image: url(${DesktopBg});
  }
`