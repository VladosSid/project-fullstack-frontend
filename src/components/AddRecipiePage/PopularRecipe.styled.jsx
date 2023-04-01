import styled from 'styled-components';
import theme from 'style/generalStyle';

export const Popular = styled.div`
    padding-top: 72px;

  @media ${theme.device.desktop} {
    display: flex;
    margin-left: 100px;
    padding-top: 100px;
    justify-content: start;
    flex-direction: column;

  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px
`;

export const Label = styled.p`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  color: #3E4462;
  line-height: 20px;

`;

export const Desc = styled.p`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7E7E7E;
`;

export const Recipe = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-bottom: 13px;
  padding-top: 24px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);
`;

export const Thumb = styled.img`
  display: flex;
  width: 104px;
  border-radius: 8px;
`;

export const Recipes = styled.ul`
  margin-bottom: 100px;
`;
