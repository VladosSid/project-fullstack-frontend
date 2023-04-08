import { useDispatch } from 'react-redux';
import operations from 'redux/users/auth-operations';

import { Logout } from './LogoutBtn.styled';
import arrow from '../../images/Header/arrow.svg';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <Logout onClick={() => dispatch(operations.logOut())}>
      Logout <img src={arrow} alt="pen" />
    </Logout>
  );
};

export default LogoutBtn;
