import { Title, Main } from './MainSection.styled';

export const MainSection = props => {
  const { title, children } = props;
  return (
    <Main>
      <Title>{title}</Title>
      {children}
    </Main>
  );
};
