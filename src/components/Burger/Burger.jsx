import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import MobileMenu from './MobileMenu.jsx/MobileMenu';

const Burger = () => {
  const burgerRoot = document.getElementById('burger-root');
  const portalEl = document.createElement('div');

  useEffect(() => {
    burgerRoot.appendChild(portalEl);

    return () => burgerRoot.removeChild(portalEl);
  }, [burgerRoot, portalEl]);

  return createPortal(<MobileMenu />, portalEl);
};

export default Burger;
