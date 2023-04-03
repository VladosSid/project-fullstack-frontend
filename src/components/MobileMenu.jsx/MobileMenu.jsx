import { useState } from 'react';
import BurgerButton from './BurgerButton';
import BurgerNavigation from './BurgerNavigation';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <BurgerButton onClick={clickToggle} isOpen={isOpen} />
      <BurgerNavigation onClick={clickToggle} isOpen={isOpen} />
    </>
  );
};

export default MobileMenu;
