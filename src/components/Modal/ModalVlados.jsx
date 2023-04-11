import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggle, children, isOpenVlados }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      toggle(e);
    }
  };

  const handleBackdropClick = e => {
    e.preventDefault();

    if (e.target === e.currentTarget) {
      toggle(e);
    }
  };

  return createPortal(
    <Overlay isOpenVlados={isOpenVlados} onClick={handleBackdropClick}>
      {children}
    </Overlay>,
    modalRoot
  );
};

export default Modal;
