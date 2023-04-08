import styles from './MobileMenu.module.css';

import { BurgerBtn } from './MobileMenu.styled';
import menu from '../../images/Header/menu.svg';

const BurgerButton = ({ onClick, isOpen }) => {
  const target = document.querySelector('body');

  return (
    <BurgerBtn
      onClick={() => {
        onClick();
        target.classList.add(styles.hidden);
      }}
    >
      <img src={menu} alt="menu" />
    </BurgerBtn>
  );
};

export default BurgerButton;
