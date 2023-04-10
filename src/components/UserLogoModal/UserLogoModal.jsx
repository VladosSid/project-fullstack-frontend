import { HiOutlinePencil } from 'react-icons/hi';
import style from './UserLogoModal.module.css';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

const UserLogoModal = ({ isOpen, clickToggle }) => {
  return (
    <div className={style.popupOverlay}>
      <div className={isOpen ? style.userLogoPopup : style.hidden}>
        <button
          id="open-modal-button"
          onClick={() => {
            clickToggle();
          }}
        >
          Edit profile <HiOutlinePencil size={14} />
        </button>
        <LogoutBtn />
      </div>
    </div>
  );
};

export default UserLogoModal;
