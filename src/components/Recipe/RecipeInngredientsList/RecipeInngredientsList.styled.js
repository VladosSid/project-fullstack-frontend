import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const Box = styled.div`
  margin-top: 122px;
  @media ${theme.device.tablet} {
    margin-top: 82px;
  }
`;

export const List = styled.ul``;

export const ListItemHeader = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  width: 100%;
  height: 38px;
  max-width: 1240px;
  background-color: #8baa36;
  border-radius: 8px;
  @media ${theme.device.tablet} {
    padding: 20px 20px;
  }
  @media ${theme.device.desktop} {
    padding: 17px 40px;
  }
`;
