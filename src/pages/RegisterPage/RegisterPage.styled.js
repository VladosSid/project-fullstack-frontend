import styled from 'styled-components';
import theme from '../../style/generalStyle';

import MobileBg from "../../images/Auth/AuthBgMobile.jpg";
import TabletBg from "../../images/Auth/AuthBgTablet.jpg";
import DesktopBg from "../../images/Auth/AuthBgDesktop.jpg";
import MobileImg from "../../images/Auth/AuthImgMobile.png";
import TabletImg from "../../images/Auth/AuthImgTablet.png";
import DesktopImg from "../../images/Auth/AuthImgDesktop.png";

export const Container = styled.div`
    position: relative;
    padding: 0 35px;
    height: 100vh;
    width: calc(100vw - 70px);  
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
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

export const Image = styled.div`
    background-image: url(${MobileImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    width: 285px; 
    height: 250px;
    z-index: 3;

    @media ${theme.device.tablet} {
        background-image: url(${TabletImg});
        width: 409px;
        height: 359px;
    }
    @media ${theme.device.desktop} {
        background-image: url(${DesktopImg});
        width: 532px;
        height: 468px;
    }
`
