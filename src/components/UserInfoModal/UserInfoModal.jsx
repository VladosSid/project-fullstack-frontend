import { UserInfoModalBackdrop } from './UserInfoModal.styled';
import { FiUser } from 'react-icons/fi';
import { GroupSvg } from './UserInfoModal.styled';
import plus from '../../images/Header/plus.svg';
import { MediaInput } from './UserInfoModal.styled';
import { NameInput } from './UserInfoModal.styled';
import { CrossSvg } from './UserInfoModal.styled';

const UserInfoModal = () => {
  return (
    <UserInfoModalBackdrop>
      <GroupSvg>
        <FiUser size={40} color="#C4C4C4" />
      </GroupSvg>
      <MediaInput type="file" />
      <CrossSvg src={plus} alt="plus" />
      <NameInput type="text" placeholder="Olena" />
      <FiUser
        size={18}
        style={{ position: 'absolute', bottom: '116px', left: '40px' }}
      />
      <button>Save Changes</button>
    </UserInfoModalBackdrop>
  );
};
export default UserInfoModal;
