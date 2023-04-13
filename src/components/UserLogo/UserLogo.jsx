import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/users';

import { BtnWrapper, UserLogoBtn } from 'components/UserLogo/UserLogo.styled';
import UserLogoModal from 'components/UserLogoModal/UserLogoModal';
import { Modal } from '../Modal/Modal';
import { ImgAva, NameUser } from 'components/UserLogo/UserLogo.styled';

import UserInfoModal from '../Modal/UserInfoModal/UserInfoModal';

const UserLogo = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [LogoModalOpen, setLogoModalOpen] = useState(false);

  const name = useSelector(authSelectors.getUsername);
  const ava = useSelector(authSelectors.getAvatar);

  useEffect(() => {
    window.addEventListener(
      'keydown',
      e => e.keyCode === 27 && setPopupIsOpen(false)
    );

    return () =>
      window.removeEventListener(
        'keydown',
        e => e.keyCode === 27 && setPopupIsOpen(false)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const popupToggle = () => {
    setPopupIsOpen(prev => !prev);
  };

  const modalToggle = () => {
    setLogoModalOpen(prev => !prev);
    document.body.style.overflow = 'hidden';
  };

  return (
    <BtnWrapper>
      <UserLogoBtn onClick={e => popupToggle(e)}>
        <ImgAva src={ava} alt="avatar" />
        <NameUser>{name}</NameUser>
      </UserLogoBtn>

      <Modal
        children={
          <UserInfoModal
            open={LogoModalOpen}
            setLogoModalOpen={setLogoModalOpen}
          />
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
