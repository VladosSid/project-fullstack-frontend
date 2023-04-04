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

export const Button = styled.div`
background-color: #22252A;
    color: rgb(255, 255, 255);
    border-radius: 24px 44px;
    border: 1px solid rgb(250, 250, 250);
    height: 52px;
    width: 161px;
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${theme.device.desktop} {
    }
`;