import styled from 'styled-components';
// import theme from './style/generalStyle';

export const ContainerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, 343px); */
  gap: 16px;
  width: 100%;
`;
export const RecipeCategoryName = styled.h2`
  margin-bottom: 32px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;

  letter-spacing: -0.02em;
  /* font-feature-settings: 'liga' off; */

  color: #001833;
`;

export const CardWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  img {
    /* width: 343px;
    height: 323px; */
    /* object-fit: cover; */
    width: 100%;
    border-radius: 8px;
  }
  > a {
    text-decoration: none;
  }
`;
export const RecipeTitleWrapper = styled.div`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 26px;
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
`;
export const RecipeTitle = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  /* identical to box height, or 125% */

  letter-spacing: -0.24px;

  /* Color - Text Primary */

  color: #3e4462;
`;
export const Button = styled.button`
  display: flex;
  width: 94px;
  height: 38px;

  background: #8aa936;
  border-radius: 6px;
  border-color: transparent;
  justify-content: center;
  align-items: center;
  /* padding: 10px 24px; */
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  margin-left: auto;
`;
