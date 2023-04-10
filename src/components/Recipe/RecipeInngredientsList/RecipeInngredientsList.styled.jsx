import styled from 'styled-components';
import theme from '../../../style/generalStyle';

export const InngredientsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;
  // @media ${theme.device.tablet} {
  //   gap: 24px;
  //   margin-bottom: 96px;
  // }
  // @media ${theme.device.desktop} {
  //   margin-bottom: 100px;
  // }
`;
