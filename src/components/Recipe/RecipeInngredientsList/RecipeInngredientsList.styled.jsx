import styled from 'styled-components';
import theme from '../../../style/generalStyle';

export const InngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;
  @media ${theme.device.tablet} {
    gap: 24px;
    margin-bottom: 96px;
  }
  @media ${theme.device.desktop} {
    margin-bottom: 100px;
  }
`;

export const RecipeItem = styled.li`
  border-radius: 8px;
  background-color: #ebf3d4;
  list-style: none;
  padding: 0 8px;
  max-width: 100%;
  @media ${theme.device.tablet} {
    // padding: 0 32px;
    max-width: 704px;
  }

  @media ${theme.device.desktop} {
    max-width: 1160px;
  }
`;

export const InngredientContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 6px;
  padding: 6px;
  margin-right: 10px;
  @media ${theme.device.tablet} {
    width: 128px;
    height: 128px;
    margin-right: 40px;
    margin-left: 32px;
  }
`;

export const IngName = styled.div`
  display: block;
  margin-right: 160px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #3e4462;
`;

export const IngDescr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  font-size: 10px;
  line-height: 15px;
  min-width: 37px;
  height: 23px;
  border-radius: 4px;
  background: #8baa36;
  color: #fafafa;
  margin-right: 49px;
  padding: 4px 8px 4px 8px;
  p @media ${theme.device.tablet} {
    min-width: 68px;
    height: 35px;
    font-size: 18px;
    margin-right: 115px;
  }
  @media ${theme.device.desktop} {
    margin-right: 142px;
    font-size: 18px;
  } ;
`;

export const MeasureBox = styled.div``;
