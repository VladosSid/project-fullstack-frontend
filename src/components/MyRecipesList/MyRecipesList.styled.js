import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  /* justify-content: center; */
  /* align-items: center; */

  /* width: 100%; */
  background: #ececec;

  @media ${theme.device.tablet} {
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */

    /* width: 100%; */
    background: #ececec;
  }

  @media ${theme.device.desktop} {
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */

    /* width: 100%; */
    background: #ececec;
  }
`;
