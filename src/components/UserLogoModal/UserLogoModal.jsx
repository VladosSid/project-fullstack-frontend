import { useDispatch } from 'react-redux';
import { useState } from 'react';
import operations from 'redux/users/auth-operations';
import { HiOutlinePencil } from 'react-icons/hi';
import UserInfoModal from 'components/UserInfoModal/UserInfoModal';
import style from './UserLogoModal.module.css';
import arrow from '../../images/Header/arrow.svg';

const UserLogoModal = ({ isOpen, clickToggle }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const toggler = () => {
    setOpen(prev => !prev);
  };
  return (
    <>
      <div className={isOpen ? style.userLogoPopup : style.hidden}>
        <button
          onClick={() => {
            clickToggle();
            toggler();
          }}
        >
          Edit profile <HiOutlinePencil size={14} />
        </button>
        <button onClick={() => dispatch(operations.logOut())}>
          Logout <img src={arrow} alt="pen" />
        </button>
      </div>
      <UserInfoModal open={open} toggler={toggler} />
    </>
  );
};

export default UserLogoModal;
