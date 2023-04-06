import styled from 'styled-components';
import theme from '../../style/generalStyle';
// export const GridContainer = styled.div`
//   width: 100%;
//   display: grid;
//   /* grid-template-columns: repeat(auto-fit, 343px); */
//   gap: 28px;
//   padding-top: 42px;
//   padding-bottom: 40px;
// `;
export const GridContainer = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 28px;
  padding-bottom: 40px;
  @media ${theme.device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    grid-column-gap: 14px;
    grid-row-gap: 100px;
  }
`;
