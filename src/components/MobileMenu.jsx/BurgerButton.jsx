import menu from '../../images/Header/menu.svg';
import { BurgerBtn } from './MobileMenu.styled';

const BurgerButton = ({ onClick }) => {
  return (
    <BurgerBtn onClick={() => onClick()}>
      <img src={menu} alt="menu" />
    </BurgerBtn>
  );
};

export default BurgerButton;
