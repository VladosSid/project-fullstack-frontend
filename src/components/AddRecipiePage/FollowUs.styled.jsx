import styled from 'styled-components';
import theme from 'style/generalStyle';

export const Follow = styled.div`
  display: none;

  @media ${theme.device.desktop} {
    display: flex;
    padding-top: 100px;
    margin-left: 100px;
    justify-content: start;
    flex-direction: column;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  width: 163px;
  justify-content: space-around;
  margin-top: 40px;

  @media ${theme.device.desctop} {
    display: flex;
  }
`;
