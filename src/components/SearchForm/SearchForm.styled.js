import styled from 'styled-components';
//------------------------
export const SearchesForm = styled.form`
  display: flex;
  width: fit-content;
  position: relative;

  margin-bottom: ${props => (props.marginBottom ? '24px' : 0)};
  /* margin-top: ${props => (props.marginTop ? '650px' : 0)}; */
  @media screen and (max-width: 767px) and (max-width: 1239px) {
    margin: ${props => props.page === 'main' && '0px auto'};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.marginBottom ? '28px' : 0)};
  }
  /* @media screen and (min-width: 1240px) {
    margin-right: ${props => props.page === 'main' && '200px'};
  } */
  /* margin-top: 0px; */
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
  @media screen and (min-width: 768px) {
    width: ${props => (props.page === 'main' ? '330px' : '350px')};
    height: ${props => (props.page === 'main' ? '59px' : '59px')};
    font-size: 16px;
    padding-left: ${props => props.page === 'main' && '38px'};
  }
  @media screen and (min-width: 1240px) {
    width: ${props => (props.page === 'main' ? '465px' : '465px')};
    height: 70px;
    /* width: ${props => props.page === 'search' && '350px'}; */
  }

  ::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #3e4462;
    @media screen and (min-width: 768px) {
      font-size: ${props => (props.page === 'main' ? '16px' : '14px')};
    }
    @media screen and (min-width: 1240px) {
      font-size: 16px;
    }
  }
  /* ::placeholder {
    font: inherit;
    font-size: 18px;
  } */
`;
export const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  width: 113px;
  height: 56px;
  /* border-color: transparent; */
  border-radius: 24px 44px;
  /* border: 1px solid rgba(34, 37, 42, 1); */
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  background-color: ${props => (props.green ? '#8BAA36' : '#22252a')};
  border: ${props => (props.green ? '1px solid #8BAA36' : '1px solid #22252a')};
  @media screen and (max-width: 767px) {
    width: ${props => props.page === 'main' && '113px'};
  }
  @media screen and (min-width: 768px) {
    width: ${props => (props.page === 'main' ? '161px' : '161px')};
    height: ${props => (props.page === 'main' ? '59px' : '59px')};
    font-size: 16px;
  }
  @media screen and (min-width: 1240px) {
    width: 161px;
    height: ${props => (props.page === 'main' ? '75px' : '73px')};
    font-size: 16px;
  }
`;
