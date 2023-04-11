import operations from 'redux/users/auth-operations';

import { createPortal } from 'react-dom';
import { PopupWrapper } from './LogoutModal.styled';
import { PopupContain } from './LogoutModal.styled';
import { CrossBtn } from './LogoutModal.styled';
import { LogoutBtn } from './LogoutModal.styled';
import { CancelBtn } from './LogoutModal.styled';
import x from '../../images/Header/x.svg';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const LogoutModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupEl = document.getElementById('logout-modal-root');

  const dispatch = useDispatch();

  const close = e => {
    if (e.keyCode === 27) {
      setIsOpen(false);
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const openBtn = document.getElementById('close-modal-btn');
    if (!openBtn) {
      return;
    }
    openBtn.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      setIsOpen(true);
    });

    return openBtn.removeEventListener('click', () => setIsOpen(true));
  }, []);

  const toggler = e => {
    document.body.style.overflow = '';
    setIsOpen(false);
  };

  return createPortal(
    <PopupWrapper
      isOpen={isOpen}
      onClick={e => {
        if (e.currentTarget === e.target) {
          document.body.style.overflow = '';
          setIsOpen(false);
        }
      }}
    >
      <PopupContain>
        <p>Are you sure you want to log out?</p>
        <CrossBtn onClick={() => toggler()}>
          <img src={x} alt="cross" />
        </CrossBtn>
        <div>
          <LogoutBtn
            onClick={() => {
              toggler();
              dispatch(operations.logOut());
            }}
          >
            Logout
          </LogoutBtn>
          <CancelBtn onClick={() => toggler()}>Cancel</CancelBtn>
        </div>
      </PopupContain>
    </PopupWrapper>,
    popupEl
  );
};

export default LogoutModal;
