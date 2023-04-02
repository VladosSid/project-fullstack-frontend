import styled from 'styled-components';
import img from '../../images/AddRecipiePage/camera.svg';
import theme from 'style/generalStyle';
import down from '../../images/AddRecipiePage/chevron-down.svg';
import ReactSelect from 'react-select';

export const CustomSelect = styled(ReactSelect)`
  .react-select__value-container {
    padding: 0;
  }

  .react-select__control {
    border-radius: 0;
    border: 1px solid #e0e0e0;
    border-width: 0px 0px 1px;
    height: 43px;
    margin-bottom: 40px;
    width: 100px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 21px;
    background-image: url(${down});
    background-repeat: no-repeat;
    background-position: 90%;
     {
      :hover
       {
        outline: 0;
        box-shadow: 0;
        border: 1px solid;
        border-width: 0px 0px 1px;
        border-color: #e0e0e0;
        outline: 0;
        box-shadow: none;
        co
      }
    }
    @media ${theme.device.desktop} {
    font-size: 16px;
    width: 130px;
  }
  }

  .css-t3ipsp-control:hover {
    outline: 0;
    box-shadow: 0;
    border: 1px solid;
    border-width: 0px 0px 1px;
    border-color: #e0e0e0;
  }

  .css-t3ipsp-control {
    outline: 0;
    box-shadow: none;
  }

  .react-select-container {
    outline: 0;
  }

  .react-select__control--is-focused {
    outline: 0;
  }

  .react-select__indicators {
    display: none;
  }

  .react-select__menu-list {
    max-height: 185px;
    width: 100px;
    scrollbar-width: 10px;
    overflow-x:hidden;  
    @media ${theme.device.desktop} {
    font-size: 16px;
    width: 130px;
  }
    }

  .react-select__menu:hover {
    outline: 0;
  }

  .react-select__menu {
    outline: 0;
    border: 0;
    width: 100px;
    margin-top: -40px;
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    overflow-x:hidden;
    @media ${theme.device.desktop} {
    font-size: 16px;
    width: 130px;
  }
  }

  .react-select__option {
    color: #000000;
    background-color: transparent;
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    letter-spasing: -0.02em;
    font-family: Poppins;
  }

  .react-select__option:hover {
    color: #8baa36;
    background-color: transparent;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.device.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

export const FilePicker = styled.div`
  height: 268px;
  background-color: #8baa36;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 32px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media ${theme.device.desktop} {
    width: 357px;
    height: 344px;
    margin: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputFile = styled.input`
  display: none;
`;

export const InputText = styled.input`
  border: 1px solid #e0e0e0;
  border-width: 0px 0px 1px;
  height: 43px;
  margin-bottom: 40px;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 21px;
  font-family: Poppins;
  background-color: transparent;
  color: #000000;
  @media ${theme.device.desktop} {
    font-size: 16px;
  }
  :focus-visible
       {
        outline: 0;
        box-shadow: 0;
      }
`;

export const FieldList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 393px;
  @media ${theme.device.desktop} {
    margin-left: 50px;
    width: 393px;
  }
`;
