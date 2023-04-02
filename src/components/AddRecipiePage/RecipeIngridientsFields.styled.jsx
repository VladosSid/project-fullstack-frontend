import styled from 'styled-components';
import theme from 'style/generalStyle';

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
  width:100%;
  justify-content: space-between;
`;

export const SelectIngridient = styled.select`
  border: none;
  background-color: #f5f5f5;
  height: 59px;
  width: 194px;
  border-radius: 6px;
  margin-right: 16px;
  padding-left: 18px;
   {
    :focus-visible {
      outline: none;
    }
  }
  @media ${theme.device.desktop} {
    width: 398px;
  }
`;

export const Quantity = styled.p`
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
  padding-left: 16px;
  width: 16px;
  height: 59px;
  padding-top: 0;
  padding-bottom: 0;

   {
    :focus-visible {
      outline: none;
    }
  }
  @media ${theme.device.desktop} {
    width: 31px;
  }
`;

export const SelectUnit = styled.select`
  border: none;
  background-color: #f5f5f5;
  height: 59px;
  width: 50px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
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
