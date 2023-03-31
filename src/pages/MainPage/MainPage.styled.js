import styled from 'styled-components';
// import theme from './style/generalStyle';
export const Container = styled.div`
  height: 100%;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, 343px); */
  gap: 16px;
  width: 100%;
`;
export const CardWrapper = styled.div`
  position: relative;
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
  outline: 1px solid #389b49;
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
