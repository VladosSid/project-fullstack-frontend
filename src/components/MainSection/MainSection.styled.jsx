import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const Title = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #001833;
  padding: 50px 0;

  @media ${theme.device.tablet} {
    font-size: 32px;
    line-height: 32px;
  }
  @media ${theme.device.desktop} {
    padding: 100px 0;
    font-size: 44px;
    line-height: 44px;
  }
`;

export const Main = styled.div`
  position: relative;
  padding: 0 16px;
  background-repeat: no-repeat;
  background-image: url('../project-fullstack-frontend/green-point.png'),
    url('../project-fullstack-frontend/green-point.png'),
    url('../project-fullstack-frontend/black_point.png');

  @media ${theme.device.tablet} {
    padding: 0 32px;
    width: 704px;
  }
  @media ${theme.device.desktop} {
    margin: 0 auto;
    width: 1242px;
    padding-bottom: 200px;
    background-position: top 52px left 258px, top 74px left 1181px,
      top 152px left 720px;
  }
`;
