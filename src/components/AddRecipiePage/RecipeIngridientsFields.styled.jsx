import styled from 'styled-components';
import theme from 'style/generalStyle';
import down from '../../images/AddRecipiePage/chevron-down.svg';
import ReactSelect from 'react-select';

export const CustomSelectUnit = styled(ReactSelect)`
  .react-select__value-container {
    padding: 0;
  }

  .react-select__control {
    border: none;
    background-color: #f5f5f5;
    height: 59px;
    width: 68px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-image: url(${down});
    background-repeat: no-repeat;
    background-position: 70%;
    font-size: 18px;
    line-height: 27px;
    font-family: Poppins;
     {
      :active :hover,
      :focus {
        outline: 0;
        border: 0;
        box-shadow: none;
      }
    }
  }

  .css-t3ipsp-control:hover {
    outline: 0;
    border: 0;
    box-shadow: 0;
  }

  .css-t3ipsp-control {
    outline: 0;
    border: 0;
    box-shadow: none;
  }

  .react-select-container {
    outline: 0;
    border: 0;
  }

  .react-select__control--is-focused {
    outline: 0;
    border: 0;
  }

  .react-select__indicators {
    display: none;
  }

  .react-select__menu-list {
    max-height: 185px;
    width: 99px;
  }

  .react-select__menu:hover {
    outline: 0;
    border: 0;
  }

  .react-select__menu {
    outline: 0;
    border: 0;
    width: 99px;
    margin-top: 0;
    margin-left: -31px;
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
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

  .react-select__option:hover {
    color: #8baa36;
    background-color: transparent;
  }
`;

export const CustomSelect = styled(ReactSelect)`
  .react-select__control {
    border: none;
    background-color: #f5f5f5;
    height: 59px;
    width: 194px;
    border-radius: 6px;
    margin-right: 16px;
    padding-left: 18px;
    background-image: url(${down});
    background-repeat: no-repeat;
    background-position: 95%;
    font-size: 18px;
    line-height: 27px;
    font-family: Poppins;
     {
      :active :hover,
      :focus {
        outline: 0;
        border: 0;
        box-shadow: none;
      }
    }
    @media ${theme.device.tablet} {
      width: 398px;
    }
  }

  .css-t3ipsp-control:hover {
    outline: 0;
    border: 0;
    box-shadow: 0;
  }

  .css-t3ipsp-control {
    outline: 0;
    border: 0;
    box-shadow: none;
  }

  .react-select-container {
    outline: 0;
    border: 0;
  }

  .react-select__control--is-focused {
    outline: 0;
    border: 0;
  }

  .react-select__indicators {
    display: none;
  }

  .react-select__menu-list {
    max-height: 185px;
    width: 198px;
    @media ${theme.device.desktop} {
      width: 398px;
    }
  }

  .react-select__menu:hover {
    outline: 0;
    border: 0;
  }

  .react-select__menu {
    outline: 0;
    border: 0;
    width: 198px;
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    @media ${theme.device.desktop} {
      width: 398px;
      margin: 0;
      padding: 0;
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

  .react-select__option:hover {
    color: #8baa36;
    background-color: transparent;
  }
`;

export const Ingridients = styled.div`
  @media ${theme.device.desktop} {
    width: 609px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin-top: 100px;
  margin-bottom: 4px;
`;

export const Simbol = styled.button`
  background-color: transparent;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  height: 16px;
  width: 16px;
  border: 0;
  stroke-opacity: 0.3;
  stroke: #333333;
  padding: 0;
   {
    :hover {
      stroke: #8baa36;
      stroke-opacity: 1;
      cursor: pointer;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  font-weight: 600;
  color: #3e4462;
`;

export const Counter = styled.div`
  display: flex;
  border: 1px solid rgba(51, 51, 51, 0.5);
  width: 110px;
  height: 32px;
  border-radius: 18px;
  justify-content: space-around;
  align-items: center;
`;

export const IngridientsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const IngridientField = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
`;

export const Quantity = styled.div`
  flex-wrap: nowrap;
  display: flex;
`;

export const InputQuantity = styled.input`
  display: flex;
  list-style: none;
  background-color: #f5f5f5;
  border: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding-left: 14px;
  width: 16px;
  height: 59px;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 18px;
  line-height: 27px;
  font-family: Poppins;
   {
    :focus-visible {
      outline: none;
    }
  }
`;

export const Delete = styled.button`
  background-color: transparent;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  height: 59px;
  width: 51px;
  border: 0;
  stroke: #333333;
  padding: 0;
  display: flex;
  justify-content: end;
  align-items: center;
   {
    :hover {
      stroke: #8baa36;
      stroke-opacity: 1;
      cursor: pointer;
    }
  }
`;
