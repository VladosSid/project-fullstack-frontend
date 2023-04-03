import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const Main = styled.div`
  position: relative;
  padding: 0 16px;
  margin: 0 auto;

  @media ${theme.device.tablet} {
    padding: 0 32px;
    width: 704px;
  }

  // ${theme.device.desktop}
  @media screen and (min-width: 1240px) {
    width: 1242px;
    padding-bottom: 200px;
    background-position: top 52px left 258px, top 74px left 1181px,
      top 152px left 720px;
  }
`;
