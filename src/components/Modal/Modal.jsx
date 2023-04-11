import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ close, children, open }) => {
  useEffect(() => {
    window.addEventListener('keydown', e => close(e));

    return window.removeEventListener('keydown', e => close(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(<Overlay open={open}>{children}</Overlay>, modalRoot);
};

export default Modal;
