import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SwBtn, Circle } from './SwitcherBtn.styled';
import theme from 'redux/theming/theme-operations';
import getTheme from 'redux/theming/theme-selector';

const SwitcherBtn = () => {
  const [checked, setChecked] = useState(false);
  const color = useSelector(getTheme);
  const [current, setCurrent] = useState(color);

  const switchHandler = () => {
    setChecked(prev => !prev);
    if (current === 'white') {
      setCurrent('dark');
    } else setCurrent('white');
  };

  const dispatch = useDispatch();

  return (
    <SwBtn
      checked={checked}
      onClick={() => {
        switchHandler();
        dispatch(theme.themeSwitch(current));
      }}
    >
      <Circle checked={checked} />
    </SwBtn>
  );
};

export default SwitcherBtn;
