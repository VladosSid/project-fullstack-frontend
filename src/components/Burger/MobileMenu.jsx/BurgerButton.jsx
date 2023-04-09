import { BurgerBtn } from './MobileMenu.styled';
import menu from '../../../images/Header/menu.svg';

const BurgerButton = () => {
  return (
    <BurgerBtn id="burger-btn">
      <img src={menu} alt="menu" />
    </BurgerBtn>
  );
};

export default BurgerButton;
