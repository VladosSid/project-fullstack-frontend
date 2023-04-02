import styled from 'styled-components';
import theme from 'style/generalStyle';

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${theme.device.mobail} {
    padding-top: 20px;
  }
  @media ${theme.device.tablet} {
    padding-top: 0;
  }
  @media ${theme.device.desktop} {
    padding-top: 0;
  }
`;
