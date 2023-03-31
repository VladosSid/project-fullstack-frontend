import styled from 'styled-components';
import theme from '../style/generalStyle';

export const AppBox = styled.div`
  padding-left: 16px;
  padding-right: 16px;

  @media ${theme.device.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${theme.device.desktop} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
