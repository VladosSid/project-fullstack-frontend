import styled from 'styled-components';
import theme from 'style/generalStyle';

export const HeaderNav = styled.nav`
  @media ${theme.device.mobail} {
    display: none;
  }
  @media ${theme.device.tablet} {
    display: none;
  }
  @media ${theme.device.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  li:last-child a {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media ${theme.device.desktop} {
    flex-direction: row;
    gap: 30px;

    li:last-child p {
      display: none;
    }
  }
`;
