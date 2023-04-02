import { useState } from 'react';
import {
  Counter,
  Title,
  Simbol,
  Header,
  IngridientsList,
  IngridientField,
  SelectIngridient,
  InputQuantity,
  SelectUnit,
  Delete
} from './RecipeIngridientsFields.styled';
import INGRIDIENTS from './ingredients.json';

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
    <>
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
            <SelectIngridient>
              {ingridients.map(item => (
                <option key={item.ttl}>{item.ttl}</option>
              ))}
            </SelectIngridient>
            <InputQuantity />
            <SelectUnit>
              {UNIT.map(unit => (
                <option key={unit}>{unit}</option>
              ))}
            </SelectUnit>
            <Delete value={index} onClick={deleteIngridientField}>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.625 4.875L4.375 16.125" />
<path d="M15.625 16.125L4.375 4.875" />
</svg>
            </Delete>
          </IngridientField>
        </IngridientsList>
      ))}
    </>
  );
};

export default RecipeIngridientsFields;
