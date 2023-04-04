import { HiOutlinePencil } from 'react-icons/hi';
import UserInfoModal from 'components/UserInfoModal/UserInfoModal';
import style from './UserLogoModal.module.css';
import pen from '../../images/Header/pen.svg';

const UserLogoModal = ({ isOpen, clickToggle }) => {
  return (
    <>
      <div className={isOpen ? style.userLogoPopup : style.hidden}>
        <button onClick={() => clickToggle()}>
          Edit profile <HiOutlinePencil size={14} />
        </button>
        <button>
          Logout <img src={pen} alt="pen" />
        </button>
      </div>
      <UserInfoModal isOpen={isOpen} />
    </>
  );
};

export default UserLogoModal;
