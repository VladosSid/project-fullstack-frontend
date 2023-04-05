import styled from 'styled-components';
import theme from 'style/generalStyle';

export const HeaderBox = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media ${theme.device.mobail} {
    width: 335px;
    padding: 20px 16px;
  }
  @media ${theme.device.tablet} {
    width: 580px;
    padding: 20px 30px;
  }
  @media ${theme.device.desktop} {
    width: 1240px;
    padding: 20px 100px;
  }
`;
