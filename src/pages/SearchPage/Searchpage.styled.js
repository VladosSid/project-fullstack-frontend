import styled from 'styled-components';
import theme from '../../style/generalStyle';
export const ContainerWrapper = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  /* padding: 0 16px;
  margin: 0 auto; */
  padding-bottom: 100px;
  padding-left: 16px;
  padding-right: 16px;
  @media ${theme.device.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${theme.device.desktop} {
    padding-left: 99px;
    padding-right: 99px;
  }
`;
