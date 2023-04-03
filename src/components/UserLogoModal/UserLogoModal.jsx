import { useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { UserLogoPopup } from './UserLogoModal.styled';
import UserInfoModal from 'components/UserInfoModal/UserInfoModal';

const UserLogoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <UserLogoPopup>
        <button onClick={() => clickToggle()}>
          Edit profile <HiOutlinePencil size={14} />
        </button>
        <button>
          Logout <AiOutlineArrowRight size={18} />
        </button>
      </UserLogoPopup>
      {isOpen && <UserInfoModal />}
    </>
  );
};

export default UserLogoModal;
