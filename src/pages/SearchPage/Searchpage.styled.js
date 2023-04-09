import styled from 'styled-components';
import theme from '../../style/generalStyle';
// export const ContainerWrapper = styled.div`
//   /* height: 100%; */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   /* padding: 0 16px;
//   margin: 0 auto; */
//   padding-bottom: 100px;
//   padding-left: 16px;
//   padding-right: 16px;

//   @media ${theme.device.tablet} {
//     padding-left: 32px;
//     padding-right: 32px;
//     padding-bottom: 200px;
//   }

//   @media screen and (min-width: 1240px) {
//     padding-left: 99px;
//     padding-right: 99px;
//   }
// `;
// export const ContainerWrapper = styled.section`
//   /* height: 100%; */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   /* padding: 0 16px;
//   margin: 0 auto; */
//   padding-bottom: 100px;

//   @media ${theme.device.tablet} {
//     padding-bottom: 200px;
//   }
// `;
export const ContainerWrapper = styled.section`
  /* height: 100%; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 100px; */

  @media ${theme.device.tablet} {
    padding-bottom: 200px;
  }
  @media ${theme.device.desktop} {
    padding-bottom: 100px;
  }
`;
