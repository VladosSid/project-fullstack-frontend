import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { UserLogoPopup } from './UserLogoModal.styled';

const UserLogoModal = () => {
  return (
    <UserLogoPopup>
      <button>
        Edit profile <HiOutlinePencil size={14} />
      </button>
      <button>
        Logout <AiOutlineArrowRight size={18} />
      </button>
    </UserLogoPopup>
  );
};

export default UserLogoModal;
