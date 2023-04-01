import styled from 'styled-components';
import theme from 'style/generalStyle';

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
