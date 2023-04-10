import { useState } from 'react';
import style from './CustomSwitch.module.css';
import theme from 'redux/theming/theme-operations';
import { useDispatch } from 'react-redux';

const SwitcherBtn = () => {
  const [checked, setChecked] = useState(false);
  const switchHandler = () => {
    setChecked(prev => !prev);
  };

  const dispatch = useDispatch();

  return (
    <button
      className={
        checked === false ? style.switch : style.switch + ' ' + style.switchedBg
      }
      onClick={() => {
        dispatch(theme.themeSwitch('white'));
        switchHandler();
      }}
    >
      <span
        className={
          checked === false ? style.circle : style.switched + ' ' + style.circle
        }
      ></span>
    </button>
  );
};

export default SwitcherBtn;
