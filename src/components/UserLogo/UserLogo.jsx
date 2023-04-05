import { useState } from 'react';
import ava from '../../images/Header/ava.svg';
import { UserLogoBtn } from 'components/UserLogo/UserLogo.styled';
import UserLogoModal from 'components/UserLogoModal/UserLogoModal';

const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <UserLogoBtn onClick={() => clickToggle()}>
        <img src={ava} alt="avatar" />
        <p>Olena</p>
      </UserLogoBtn>
      <UserLogoModal isOpen={isOpen} clickToggle={clickToggle} />
    </>
  );
};

export default UserLogo;
