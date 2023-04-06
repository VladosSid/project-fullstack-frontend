import sw from '../../images/Header/switch.svg';
import { HeaderSwitcher } from './MobileMenu.styled';

export const HeaderSwitcherBtn = () => {
  return (
    <HeaderSwitcher>
      <img src={sw} alt="switcher" />
    </HeaderSwitcher>
  );
};
