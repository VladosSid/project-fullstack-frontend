import { createPortal } from 'react-dom';
import MobileMenu from './MobileMenu.jsx/MobileMenu';

const Burger = () => {
  const burgerRoot = document.getElementById('burger-root');

  return createPortal(<MobileMenu />, burgerRoot);
};

export default Burger;
