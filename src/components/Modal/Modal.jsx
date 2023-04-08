import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import UserInfoModal from 'components/UserInfoModal/UserInfoModal';

const Modal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  const portalElement = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(portalElement);
    return () => {
      modalRoot.removeChild(portalElement);
    };
  }, [modalRoot, portalElement]);

  return createPortal(<UserInfoModal />, portalElement);
};

export default Modal;
