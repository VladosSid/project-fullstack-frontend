import { HiOutlinePencil } from 'react-icons/hi';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import { UserLogoPopup } from './UserLogoModal.styled';

const UserLogoModal = ({ isOpen, popupToggle, toggler }) => {
  return (
    <>
      {isOpen === true && (
        <UserLogoPopup>
          <div>
            <button
              id="open-modal-button"
              onClick={() => {
                toggler();
                popupToggle();
              }}
            >
              Edit profile <HiOutlinePencil size={14} />
            </button>
            <LogoutBtn />
          </div>
        </UserLogoPopup>
      )}
    </>
  );
};

export default UserLogoModal;
