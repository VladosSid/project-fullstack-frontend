import { useState } from 'react';
import ava from '../../images/Header/ava.svg';
import { BtnWrapper, UserLogoBtn } from 'components/UserLogo/UserLogo.styled';
import UserLogoModal from 'components/UserLogoModal/UserLogoModal';
import { ImgAva } from 'components/UserLogo/UserLogo.styled';

const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <BtnWrapper>
      <UserLogoBtn onClick={() => clickToggle()}>
        <ImgAva src={ava} alt="avatar" />
        <p>Olena</p>
      </UserLogoBtn>
      <UserLogoModal isOpen={isOpen} clickToggle={clickToggle} />
    </BtnWrapper>
  );
};

export default UserLogo;
