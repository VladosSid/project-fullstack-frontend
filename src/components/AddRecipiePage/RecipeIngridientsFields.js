import { useState } from 'react';
import {
  Counter,
  Title,
  Simbol,
  Header,
  IngridientsList,
  IngridientField,
  Quantity,
  InputQuantity,
  Delete,
  Ingridients,
  CustomSelect,
  CustomSelectUnit
} from './RecipeIngridientsFields.styled';
import INGRIDIENTS from './ingredients.json';
//import Select from 'react-dropdown-select';


const RecipeIngridientsFields = () => {
  const [count, setCount] = useState(0);
  const [ingridient, setIngridient] = useState([]);
  const [ingridients, setIngridients] = useState(INGRIDIENTS);

if(!ingridients){
    setIngridients(INGRIDIENTS)
}
  

  const UNIT = ['tbs', 'tsp', 'kg', 'g'];

  function deleteIngridientField(e) {
    setCount(count - 1);

    let newIingridients = ingridient;
   newIingridients.splice(e.currentTarget.value, 1);
    setIngridient(newIingridients);
  }

  function handleClick(e) {
    // eslint-disable-next-line default-case
    switch (e.currentTarget.value) {
      case 'minus':
        if (count > 0) {
          setCount(count - 1);
          let newIingridients = ingridient
          newIingridients.pop()
          setIngridient(newIingridients)
        }
        break;
      case 'plus':
        setCount(count + 1);
        setIngridient(ingridient => [...ingridient, { }]);
    }
  }

  return (
    <Ingridients>
      <Header>
        <Title>Ingridients</Title>
        <Counter>
          <Simbol value="minus" onClick={handleClick}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.50024 8H13.5003" />
            </svg>
          </Simbol>
          <div>{count}</div>
          <Simbol value="plus" onClick={handleClick}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="curent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.50024 8H13.5003" />
              <path d="M8.00024 2.5V13.5" />
            </svg>
          </Simbol>
        </Counter>
      </Header>
      {ingridient.map((field, index) => (
        <IngridientsList key={index}>
          <IngridientField>
            <CustomSelect className="react-select-container" classNamePrefix="react-select" options={ingridients.map(({ttl}) =>({value: ttl, label: ttl}))}  />
            <Quantity><InputQuantity value="0"/>
            <CustomSelectUnit placeholder="" classNamePrefix="react-select" options={UNIT.map((unit) =>({value: unit, label: unit}))} /></Quantity>
            <Delete value={index} onClick={deleteIngridientField}>
            <svg width="20" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.625 4.875L4.375 16.125" />
<path d="M15.625 16.125L4.375 4.875" />
</svg>
            </Delete>
          </IngridientField>
        </IngridientsList>
      ))}
    </Ingridients>
  );
};

export default RecipeIngridientsFields;
