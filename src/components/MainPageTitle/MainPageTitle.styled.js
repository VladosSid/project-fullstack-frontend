import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const ContaynerTitle = styled.div`
  width: 100%;

  position: relative;
`;

export const Title = styled.h2`
  padding-top: 53px;
  padding-bottom: 50px;

  font-family: 'Poppins';
  font-size: 28px;
  line-height: 28px;
  color: ${props => props.theme.color.mainPageTitle.colorTitle};

  @media ${theme.device.tablet} {
    padding-top: 73px;
    padding-bottom: 72px;
    font-size: 32px;
    line-height: 32px;
  }
  @media ${theme.device.desktop} {
    padding-top: 102px;
    font-size: 44px;
    line-height: 44px;
  } ;
`;

export const BackgroundTopOne = styled.img`
  position: absolute;
  z-index: -1;
  width: 8px;
  height: 8px;
  bottom: 105px;
  right: 236px;
  @media ${theme.device.tablet} {
    width: 14px;
    height: 14px;
    bottom: 136px;
    right: 495px;
  }
  @media ${theme.device.desktop} {
    bottom: 145px;
    right: 993px;
  } ;
`;

export const BackgroundTop = styled.img`
  position: absolute;
  z-index: -1;
  width: 6px;
  height: 6px;
  bottom: 43px;
  right: 112px;
  @media ${theme.device.tablet} {
    width: 12px;
    height: 12px;
    bottom: 69px;
    right: 280px;
  }
  @media ${theme.device.desktop} {
    bottom: 65px;
    right: 517px;
  } ;
`;
export const BackgroundTopTwo = styled.img`
  position: absolute;
  z-index: -1;
  width: 8px;
  height: 8px;
  bottom: 73px;
  right: 7px;
  @media ${theme.device.tablet} {
    width: 14px;
    height: 14px;
    bottom: 123px;
    right: -9px;
  }
  @media ${theme.device.desktop} {
    bottom: 132px;
    right: 71px;
  } ;
`;
