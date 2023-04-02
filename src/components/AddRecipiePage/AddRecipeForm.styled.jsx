import styled from 'styled-components';
import theme from 'style/generalStyle';


export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 28px;
  margin-top: 50px;
`;

export const Form = styled.form`
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  @media ${theme.device.desktop} {
    padding-top: 100px;
}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
