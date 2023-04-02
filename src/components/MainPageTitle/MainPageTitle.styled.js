import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const TitleShopingList = styled.h2`
  padding-top: 53px;
  padding-bottom: 50px;

  font-family: 'Poppins';
  font-size: 28px;
  line-height: 28px;
  color: #001833;
  
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