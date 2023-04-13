import { BurgerBtn } from './MobileMenu.styled';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

const BurgerButton = () => {
  return (
    <BurgerBtn id="burger-btn">
      <HiOutlineMenuAlt2 size={32} />
    </BurgerBtn>
  );
};

export default BurgerButton;
