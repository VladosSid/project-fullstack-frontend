import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const ContainerWrapper = styled.section`
  padding-bottom: 100px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  @media ${theme.device.tablet} {
    padding-bottom: 200px;
  }
  @media ${theme.device.desktop} {
    padding-bottom: 100px;
  }
`;
