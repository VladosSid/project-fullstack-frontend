import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 14px;
  margin-bottom: 18px;
  border-radius: 8px;
  box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 1px solid rgba(34, 60, 80, 0.2);
  background: ${props => props.theme.color.favorit.CardWrapper};

  @media ${theme.device.tablet} {
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding: 28px 24px;
  }

  @media ${theme.device.desktop} {
    position: relative;
    /* display: flex;
justify-content: flex-start; */
    padding: 40px;
    margin-bottom: 50px;
  }
`;

export const CardImg = styled.img`
  display: block;
  width: 124px;
  height: 124px;
  border-radius: 8px;

  @media ${theme.device.tablet} {
    display: block;
    width: 228px;
    height: 232px;
  }

  @media ${theme.device.desktop} {
    display: block;
    width: 318px;
    height: 324px;
  }
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 124px;
  /* width: 170px; */
  margin-left: 14px;

  @media ${theme.device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 232px;
    /* width: 300px; */
    margin-left: 24px;
  }

  @media ${theme.device.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 324px;
    margin-left: 40px;
    /* width: 680px; */
  }
`;

export const CardTitle = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${props => props.theme.color.favorit.CardTitle};

  @media ${theme.device.tablet} {
    font-size: 24px;
    line-height: 24px;
  }

  @media ${theme.device.desktop} {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const CardDescription = styled.p`
  display: inline-block;
  max-height: 60px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.color.favorit.CardDescription};

  @media ${theme.device.tablet} {
    display: inline-block;
    max-height: 80px;
    font-size: 14px;
    line-height: 18px;
  }

  @media ${theme.device.desktop} {
    display: inline-block;
    max-height: 160px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CardTime = styled.p`
  display: inline-block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: #3e4462;
  color: ${props => props.theme.color.favorit.CardTime};

  @media ${theme.device.tablet} {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
  }

  @media ${theme.device.desktop} {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const CardButtonSee = styled.div`
  display: none;

  @media ${theme.device.tablet} {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 138px;
    height: 45px;
    right: 24px;
    bottom: 28px;
    background: ${props => props.theme.color.favorit.CardButtonSee};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #fafafa;
    border-radius: 24px 44px;
    border: 1px solid ${props => props.theme.color.favorit.CardButtonSeeBorder};
    &:hover {
      background: ${props => props.theme.color.favorit.CardButtonSeeHover};
      border-color: ${props => props.theme.color.favorit.CardButtonSeeHover};
    }
  }

  @media ${theme.device.desktop} {
    /* background-color: transparent; */
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 40px;
    bottom: 40px;
    width: 160px;
    height: 54px;
    padding: 14px 28px;
    font-size: 16px;
    line-height: 24px;
    color: #fafafa;
    border-radius: 24px 44px;
  }
`;

export const CardButtonDelete = styled.button`
  position: absolute;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding: 0;
  width: 24px;
  height: 24px;
  right: 14px;
  bottom: 14px;
  background: ${props => props.theme.color.favorit.CardButtonDelete};
  // color: #22252a;
  border-radius: 4px;
  border: 1.2px solid
    ${props => props.theme.color.favorit.CardButtonDeleteBorder};
  &:hover {
    background: ${props =>
      props.theme.color.favorit.CardButtonDeleteHoverBackground};
    // color: #fafafa;
  }

  @media ${theme.device.tablet} {
    position: absolute;
    width: 38px;
    height: 38px;
    right: 24px;
    top: 28px;

    @media ${theme.device.desktop} {
      position: absolute;
      width: 44px;
      height: 44px;
      right: 40px;
      top: 40px;
    }
  }
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.color.favorit.CardIconFill};
  stroke: ${props => props.theme.color.favorit.CardIconStroke};
  &:hover {
    fill: ${props => props.theme.color.favorit.CardIconFillHover};
    stroke: ${props => props.theme.color.favorit.CardIconStrokeHover};
  }
  svg {
    width: 10px;
    height: 11px;
  }

  @media ${theme.device.tablet} {
    width: 38px;
    height: 38px;
  }
  svg {
    width: 16px;
    height: 18px;
  }

  @media ${theme.device.desktop} {
    width: 44px;
    height: 44px;
    svg {
      width: 18px;
      height: 20px;
    }
  }
`;
