import styled from 'styled-components';
import theme from '../style/generalStyle';

export const AppBox = styled.div`
  padding: 20px 16px;

  @media ${theme.device.tablet} {
    padding: 20px 32px;
  }

  @media ${theme.device.desktop} {
    padding: 14px 100px;
  }
`;
