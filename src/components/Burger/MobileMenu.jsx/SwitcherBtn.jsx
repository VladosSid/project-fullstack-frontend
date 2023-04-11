import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SwBtn, Circle } from './SwitcherBtn.styled';
import theme from 'redux/theming/theme-operations';

const SwitcherBtn = () => {
  const [checked, setChecked] = useState(false);
  const switchHandler = () => {
    setChecked(prev => !prev);
  };

  const dispatch = useDispatch();

  return (
    <SwBtn
      checked={checked}
      onClick={() => {
        dispatch(theme.themeSwitch('white'));
        switchHandler();
      }}
    >
      <Circle checked={checked} />
    </SwBtn>
  );
};

export default SwitcherBtn;
