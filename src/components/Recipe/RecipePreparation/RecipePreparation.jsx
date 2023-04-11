import {
  PreparationWrapper,
  InstructionWrapper,
  InstructionTitle,
  InstructionList,
  //   InstructionText,
  ImageWrapper,
} from './RecipePreparation.styled';

export const RecipePreparation = () => {
  return (
    <PreparationWrapper>
      <InstructionWrapper>
        <InstructionTitle></InstructionTitle>
        <InstructionList></InstructionList>
      </InstructionWrapper>
      <ImageWrapper></ImageWrapper>
    </PreparationWrapper>
  );
};
