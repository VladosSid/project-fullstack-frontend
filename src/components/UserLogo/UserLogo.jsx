import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/users';

import { BtnWrapper, UserLogoBtn } from 'components/UserLogo/UserLogo.styled';
import UserLogoModal from 'components/UserLogoModal/UserLogoModal';
import { Modal } from '../Modal/ModalVlados';
import { ImgAva } from 'components/UserLogo/UserLogo.styled';

import UserInfoModal from '../Modal/UserInfoModal/UserInfoModal';

const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const name = useSelector(authSelectors.getUsername);
  const ava = useSelector(authSelectors.getAvatar);

  const clickToggle = e => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };
  return (
    <BtnWrapper>
      <UserLogoBtn onClick={e => clickToggle(e)}>
        <ImgAva src={ava} alt="avatar" />
        <p>{name}</p>
      </UserLogoBtn>

      <Modal
        toggle={clickToggle}
        isOpenVlados={isOpen}
        children={<UserInfoModal toggle={clickToggle} />}
      />

      {/* <UserLogoModal isOpen={isOpen} clickToggle={clickToggle} /> */}
    </BtnWrapper>
  );
};

export default UserLogo;
