import operations from 'redux/users/auth-operations';

import { createPortal } from 'react-dom';
import { PopupWrapper } from './Popup.styled';
import { PopupContain } from './Popup.styled';
import { CrossBtn } from './Popup.styled';
import { LogoutBtn } from './Popup.styled';
import { CancelBtn } from './Popup.styled';
import x from '../../images/Header/x.svg';
import style from './Popup.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupEl = document.getElementById('popup-root');

  const dispatch = useDispatch();

  useEffect(() => {
    const openBtn = document.getElementById('close-modal-btn');
    if (!openBtn) {
      return;
    }
    openBtn.addEventListener('click', () => setIsOpen(true));

    return openBtn.removeEventListener('click', () => setIsOpen(true));
  }, []);

  const toggler = e => {
    setIsOpen(false);
  };

  return createPortal(
    <PopupWrapper
      onClick={e => {
        if (e.currentTarget === e.target) {
          setIsOpen(false);
        }
      }}
      className={isOpen === false && style.hidden}
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

export default Popup;
