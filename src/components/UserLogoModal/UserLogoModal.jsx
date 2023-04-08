import { HiOutlinePencil } from 'react-icons/hi';
import style from './UserLogoModal.module.css';
import styleModal from '../UserInfoModal/UserInfoModal.module.css';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

const UserLogoModal = ({ isOpen, clickToggle }) => {
  const modal = document.getElementById('user-info-modal');

  const modalHandler = e => {
    modal.classList.add(styleModal.active);
  };

  return (
    <div className={style.popupOverlay}>
      <div className={isOpen ? style.userLogoPopup : style.hidden}>
        <button
          onClick={() => {
            clickToggle();
            modalHandler();
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
