import sw from '../../images/Header/switch.svg';
import { Switcher } from './MobileMenu.styled';

export const SwitcherBtn = () => {
  return (
    <Switcher>
      <img src={sw} alt="switcher" />
    </Switcher>
  );
};
