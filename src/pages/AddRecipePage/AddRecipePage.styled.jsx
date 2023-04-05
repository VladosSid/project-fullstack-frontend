import styled from 'styled-components';
import theme from 'style/generalStyle';

export const Title = styled.h1`
  margin-top: 50px;
  font-family: 'Poppins';
  font-size: 28px;
  line-height: 28px;
  color: #001833;
`;

export const Wrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;

@media ${theme.device.desktop} {
    flex-direction: row;
}

`;

export const Col = styled.div`
display: flex;
flex-direction: column;
`;
