import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/users';

import { BtnWrapper, UserLogoBtn } from 'components/UserLogo/UserLogo.styled';
import UserLogoModal from 'components/UserLogoModal/UserLogoModal';
import { ImgAva } from 'components/UserLogo/UserLogo.styled';

const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const name = useSelector(authSelectors.getUsername);
  const ava = useSelector(authSelectors.getAvatar);

  const clickToggle = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <BtnWrapper>
      <UserLogoBtn onClick={() => clickToggle()}>
        <ImgAva src={ava} alt="avatar" />
        <p>{name}</p>
      </UserLogoBtn>
      <UserLogoModal isOpen={isOpen} clickToggle={clickToggle} />
    </BtnWrapper>
  );
};

export default UserLogo;
