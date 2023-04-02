import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const List = styled.ul`

  list-style: none;
`;
export const Item = styled.li`

  padding: 0 16px;
  width: 343px;
  border-bottom: 1px solid #e0e0e0;

  @media ${theme.device.tablet} {
    padding: 0 32px;
    width: 704px;
  }

  @media ${theme.device.desktop} {
    padding: 0 40px;
    width: 1240px;
  }
`;

export const ItemContayner = styled.div`
  display: flex;
    padding-top: 50px;
  padding-bottom: 50px;
`;

export const ImageContayner = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 6px;
  background: #ebf3d4;
  padding: 6px;
  margin-right: 170px;
  @media ${theme.device.tablet} {
    width: 93px;
    height: 97px;
    margin-right: auto;
  }
`;

export const TitleProduct = styled.div`
  position: absolute;
  left: 96px;
  width: 100px;
  font-family: 'Poppins';
  font-size: 10px;
  line-height: 12px;
  color: #3e4462;

  @media ${theme.device.tablet} {
    left: 148px;
    width: 200px;
    font-size: 16px;
    line-height: 24px;
  }
  @media ${theme.device.desktop} {
    left: 170px;
  } ;
`;

export const NumberContayner = styled.div`
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
  @media ${theme.device.tablet} {
    min-width: 68px;
    height: 35px;
    font-size: 18px;
    line-height: 27px;
    margin-right: 115px;
  }
  @media ${theme.device.desktop} {
    margin-right: 142px;
  } ;
`;

export const Remove = styled.button`
  display: flex;
  background-color: transparent;
  border: 0;
`;

export const RemoveSvg = styled.div`
  svg {
    stroke: #333333;
    width: 8px;
    height: 8px;

    @media ${theme.device.tablet} {
      width: 12px;
      height: 12px;
    }

    &:hover {
      stroke: #8baa36;
    }
  }
`;

