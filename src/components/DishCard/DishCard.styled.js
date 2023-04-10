import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const DishWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 323px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    @media ${theme.device.tablet} {
    }
    @media ${theme.device.desktop} {
    }
  }
  > a {
    text-decoration: none;
  }
  @media ${theme.device.tablet} {
    width: 336px;
    height: 323px;
  }
  @media ${theme.device.desktop} {
    width: 300px;
    height: 323px;
  }
`;
export const DishTitleWrapper = styled.div`
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 26px;
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  max-width: 323px;
  @media ${theme.device.tablet} {
    max-width: 300px;
  }
  @media ${theme.device.desktop} {
    left: 16px;
    right: 16px;
    max-width: 286px;
  }
`;
export const DishTitle = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: #3e4462;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
