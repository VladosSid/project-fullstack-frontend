import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin-top: 100px;
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
  margin-bottom: 24px;
`;

export const SelectIngridient = styled.select`
  border: none;
  background-color: #d9d9d9;
  height: 59px;
  border-radius: 6px;
  margin-right: 32px;
  padding-left: 18px;
   {
    :focus-visible {
      outline: none;
    }
  }
`;

export const InputQuantity = styled.input`
  display: flex;
  list-style: none;
  background-color: #d9d9d9;
  border: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding-left: 14px;
  width: 20px;
  height: 59px;
  padding-top: 0;
  padding-bottom: 0;

   {
    :focus-visible {
      outline: none;
    }
  }
`;

export const SelectUnit = styled.select`
  border: none;
  background-color: #d9d9d9;
  height: 59px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-right: 60px;
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
  height: 16px;
  width: 16px;
  border: 0;
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
