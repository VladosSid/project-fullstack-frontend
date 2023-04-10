import styled from 'styled-components';
import theme from '../../style/generalStyle';
//------------------------
export const SearchesForm = styled.form`
  display: flex;
  width: fit-content;
  position: relative;
  margin: ${props => props.page === 'search' && '0px auto 24px'};
  @media screen and (max-width: 767px) and (max-width: 1303px) {
    margin: ${props => props.page === 'main' && '0px auto'};
  }
  @media ${theme.device.tablet} {
    margin: ${props => props.page === 'search' && '0px auto 28px'};
  }
  @media ${theme.device.desktop} {
    margin: ${props => props.page === 'search' && '0px auto 28px'};
  }
`;

export const SearchInput = styled.input`
  background-color: #fafafa;
  border: none;
  outline: none;
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  height: 52px;

  width: 283px;
  padding-left: 32px;
  @media ${theme.device.tablet} {
    width: ${props => (props.page === 'main' ? '330px' : '350px')};
    height: 59px;
    font-size: 16px;
    padding-left: ${props => props.page === 'main' && '38px'};
  }
  @media ${theme.device.desktop} {
    width: 465px;
    height: 70px;
  }

  ::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #3e4462;
    @media ${theme.device.tablet} {
      font-size: ${props => (props.page === 'main' ? '16px' : '14px')};
    }
    @media ${theme.device.desktop} {
      font-size: 16px;
    }
  }
`;
export const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  width: 113px;
  height: 56px;

  border-radius: 24px 44px;
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  background-color: ${props => (props.green ? '#8BAA36' : '#22252a')};
  border: ${props => (props.green ? '1px solid #8BAA36' : '1px solid #22252a')};
  &:hover,
  &:focus {
    background-color: ${props => (props.green ? '#22252a' : '#8BAA36')};
    border: ${props =>
      props.green ? '1px solid #22252a' : '1px solid #8BAA36'};
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    width: ${props => props.page === 'main' && '113px'};
  }
  @media ${theme.device.tablet} {
    width: 161px;
    height: 63px;
    font-size: 16px;
  }
  @media ${theme.device.desktop} {
    width: 161px;
    height: 75px;
    font-size: 16px;
  }
`;
