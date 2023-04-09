import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 14px;
  /* width: 343px;
height: 152px; */
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
    border-radius: 8px;
  }

  @media ${theme.device.desktop} {
    position: relative;
    /* display: flex;
justify-content: flex-start; */
    padding: 40px;
    margin-bottom: 50px;
    /* width: 1240px;
height: 404px; */
      border-radius: 8px;
  }
`;

export const CardImg = styled.img`
display: block,
width: 124px;
height: 124px;
border-radius: 8px;
@media ${theme.device.tablet} {
    display: block,
width: 228px;
height: 232px;
border-radius: 8px;
}

@media ${theme.device.desktop} {
display: block,
width: 318px;
height: 324px;
border-radius: 8px;}
`;

export const CardTextWrapper = styled.div`
    height: 124px;
  /* width: 170px; */
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${theme.device.tablet} {
    height: 232px;
    /* width: 300px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${theme.device.desktop} {
    height: 324px;
    margin-left: 40px;
    /* width: 680px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px; /* identical to box height, or 100% */
  letter-spacing: -0.24px;
  /* Color - Text Primary */
  color: ${props => props.theme.color.favorit.CardTitle};

  @media ${theme.device.tablet} {
    margin-bottom: 28px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    /* identical to box height, or 100% */
    letter-spacing: -0.24px;
    /* Color - Text Primary */
   
  }

  @media ${theme.device.desktop} {
    margin-bottom: 50px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.24px;
    
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
  /* or 125% */
  letter-spacing: -0.02em;
  color: ${props => props.theme.color.favorit.CardDescription};

  @media ${theme.device.tablet} {
    display: inline-block;
    max-height: 80px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* or 129% */
    letter-spacing: -0.02em;
  }

  @media ${theme.device.desktop} {
    display: inline-block;
    max-height: 160px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */
    letter-spacing: -0.02em;
  }
`;

export const CardTime = styled.p`
  display: inline-block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  /* identical to box height, or 140% */
  letter-spacing: -0.24px;
  color: ${props => props.theme.color.favorit.CardTime};

  @media ${theme.device.tablet} {
    display: inline-block;
  }

  @media ${theme.device.desktop} {
    display: inline-block;
  }
`;

export const CardButtonSee = styled.div`
display: none;

@media ${theme.device.tablet} {
    position: absolute;
width: 138px;
height: 45px;
right: 24px;
bottom: 28px;
display: flex;
justify-content: center;
align-items: center;
background: ${props => props.theme.color.favorit.CardButtonSee};
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
color: #FAFAFA;
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
right: 40px;
bottom: 40px;
  width: 160px;
height: 54px;
display: flex;
justify-content: center;
align-items: center;
   padding: 14px 28px
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fafafa;
  border-radius: 24px 44px;

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
  &:hover{
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
  &:hover{
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
