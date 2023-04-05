import styled from 'styled-components';
import theme from 'style/generalStyle';

export const BtnWrapper = styled.div`
  position: relative;
  @media ${theme.device.mobail} {
    margin-left: auto;
    margin-right: 55px;
  }
  @media ${theme.device.tablet} {
    margin-left: auto;
    margin-right: 55px;
  }
  @media ${theme.device.desktop} {
    margin-left: 230px;
    margin-right: 55px;
  }
`;

export const UserLogoBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;

  p {
    font-family: Poppins, sans-serif;
  }
`;

export const ImgAva = styled.img`
  margin-right: 14px;
`;