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
      {!isOpen ? (
        <BurgerButton onClick={clickToggle} />
      ) : (
        <BurgerNavigation onClick={clickToggle} />
      )}
    </>
  );
};

export default MobileMenu;
