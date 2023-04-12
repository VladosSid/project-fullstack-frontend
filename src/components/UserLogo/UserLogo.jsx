import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/users';

import { BtnWrapper, UserLogoBtn } from 'components/UserLogo/UserLogo.styled';
import UserLogoModal from 'components/UserLogoModal/UserLogoModal';
import { Modal } from '../Modal/Modal';
import { ImgAva } from 'components/UserLogo/UserLogo.styled';

import UserInfoModal from '../Modal/UserInfoModal/UserInfoModal';

const UserLogo = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [LogoModalOpen, setLogoModalOpen] = useState(false);

  const name = useSelector(authSelectors.getUsername);
  const ava = useSelector(authSelectors.getAvatar);

  const popupToggle = () => {
    setPopupIsOpen(prev => !prev);
  };

  const modalToggle = () => {
    setLogoModalOpen(prev => !prev);
    document.body.style.overflow = 'hidden';
  };

  const close = e => {
    if (e.code === 'Escape') {
      setPopupIsOpen(false);
      setLogoModalOpen(false);
    }
  };

  return (
    <BtnWrapper>
      <UserLogoBtn onClick={e => popupToggle(e)}>
        <ImgAva src={ava} alt="avatar" />
        <p>{name}</p>
      </UserLogoBtn>

      <Modal
        close={close}
        open={LogoModalOpen}
        children={
          <UserInfoModal setLogoModalOpen={setLogoModalOpen} close={close} />
        }
      />

      <UserLogoModal
        isOpen={popupIsOpen}
        popupToggle={popupToggle}
        toggler={modalToggle}
      />
    </BtnWrapper>
  );
};

export default UserLogo;
