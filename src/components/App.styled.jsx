import styled from 'styled-components';
import theme from '../style/generalStyle';

export const AppBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40;

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
