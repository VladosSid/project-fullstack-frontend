import styled from 'styled-components';
import theme from 'style/generalStyle';

export const HeaderContainer = styled.div`
  margin: 0 auto;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.color.header.backgroun};
  z-index: 30;

  @media ${theme.device.mobail} {
    padding: 20px 16px;
  }
  @media ${theme.device.tablet} {
    padding: 20px 32px;
  }
  @media ${theme.device.desktop} {
    padding: 20px 100px;
  }
`;

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media ${theme.device.mobail} {
    max-width: 375px;
  }
  @media ${theme.device.tablet} {
    max-width: 767px;
  }
  @media ${theme.device.desktop} {
    max-width: 1240px;
  }
`;
