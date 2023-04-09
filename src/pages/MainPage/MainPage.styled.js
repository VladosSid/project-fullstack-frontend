import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const ContainerWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
  @media ${theme.device.desktop} {
  }
`;

export const Section = styled.section`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${theme.device.desktop} {
    padding-left: 99px;
    padding-right: 99px;
    padding-bottom: 118px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 50px;
    margin-bottom: 32px;
  }

  @media ${theme.device.desktop} {
    gap: 100px;
    margin-bottom: 14px;
  }
`;

export const GridContainer = styled.div`
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }

  @media ${theme.device.desktop} {
    display: flex;
    gap: 14px;
  }
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
  margin-top: 24px;
  @media ${theme.device.tablet} {
    margin-top: 40px;
  }

  @media ${theme.device.desktop} {
    margin-top: 60px;
  }
`;

export const MPButton = styled.button`
  display: block;
  width: 195px;
  height: 46px;
  /* border-color: transparent; */
  border-radius: 24px 44px;
  border: 2px solid #8baa36;
  background-color: transparent;
  margin: 0 auto;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  color: #22252a;
  @media ${theme.device.tablet} {
    width: 239px;
    height: 61px;

    font-size: 16px;
  }
`;
