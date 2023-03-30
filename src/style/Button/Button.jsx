import { ButtonCustom, Box } from './Button.styled';

export default function Button({ value, nameButton }) {
  return (
    <Box value={nameButton}>
      <ButtonCustom value={nameButton}>{value}</ButtonCustom>
    </Box>
  );
}
