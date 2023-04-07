import { useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import UserInfoModal from 'components/UserInfoModal/UserInfoModal';
import style from './UserLogoModal.module.css';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

const UserLogoModal = ({ isOpen, clickToggle }) => {
  const [open, setOpen] = useState(false);

  const toggler = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className={style.popupOverlay}>
      <div className={isOpen ? style.userLogoPopup : style.hidden}>
        <button
          onClick={() => {
            clickToggle();
            toggler();
          }}
        >
          Edit profile <HiOutlinePencil size={14} />
        </button>
        <LogoutBtn />
      </div>
      <UserInfoModal open={open} toggler={toggler} />
    </div>
  );
};

export default UserLogoModal;
