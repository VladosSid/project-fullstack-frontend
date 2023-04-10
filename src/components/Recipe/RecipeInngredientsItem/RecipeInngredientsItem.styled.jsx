import styled from 'styled-components';
// import theme from '../../../style/generalStyle';

export const RecipeItem = styled.li`
  border-radius: 8px;
  background-color: #ebf3d4;
  //   list-style: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 14px 29px 14px 14px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    padding: 21px 58px 21px 28px;
  }
  @media screen and (min-width: 1440px) {
    padding: 5px 70px 5px 36px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 40px;
  }
  & img {
    width: 57px;
    height: 57px;
    @media screen and (min-width: 768px) {
      width: 136px;
      height: 136px;
    }
    @media screen and (min-width: 1440px) {
      width: 172px;
      height: 172px;
    }
  }
`;

export const TextContainer = styled.div`
  max-width: 114px;
  height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  @media screen and (min-width: 768px) {
    max-width: 208px;
    height: 114px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 547px;
    height: 104px;
  }
`;
