import { ButtonCustom, Box } from './Button.styled';

export default function Button({ value, nameButton, onclick }) {
  return (
    <Box value={nameButton}>
      <ButtonCustom onClick={onclick} value={nameButton}>
        {value}
      </ButtonCustom>
    </Box>
  );
}
