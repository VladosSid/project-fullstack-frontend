import styled from 'styled-components';
import theme from '../../style/generalStyle';

import MobileBg from "../../images/Auth/AuthBgMobile.jpg";
import TabletBg from "../../images/Auth/AuthBgTablet.jpg";
import DesktopBg from "../../images/Auth/AuthBgDesktop.jpg";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 35px;
    height: 100vh;
    width: calc(100vw - 70px);  
    color: #fff;
`

export const Background = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    background-image: url(${MobileBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    width: 100vw; 
    height: 490px;

    @media ${theme.device.tablet} {
        background-image: url(${TabletBg});
        height: 606px;
    }
    @media ${theme.device.desktop} {
        background-image: url(${DesktopBg});
        height: 325px;
    }
`