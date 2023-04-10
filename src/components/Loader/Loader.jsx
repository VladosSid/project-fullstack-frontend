import { Box, Videlka, Knifik } from './Loader.styled';

// size - common size in px, by default = 300px
// t - animation time in ms, by default 1000ms

export const Loader = ({ size = 300, t = 1000 }) => {
  let w = size / 3;
  let h = size - w;
  return (
    <Box square={size}>
      <Videlka width={w} height={h} t={t} />
      <Knifik width={w} height={h} t={t} />
    </Box>
  );
};
