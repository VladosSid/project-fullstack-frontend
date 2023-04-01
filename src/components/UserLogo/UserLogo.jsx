import ava from '../../images/Header/ava.svg';
import { UserLogoBtn } from 'components/UserLogo/UserLogo.styled';

const UserLogo = () => {
  return (
    <UserLogoBtn>
      <img src={ava} alt="avatar" />
      <p>Viktor</p>
    </UserLogoBtn>
  );
};

export default UserLogo;
