import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 14px;
  /* width: 343px;
height: 152px; */
  margin-bottom: 18px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 1px solid rgba(34, 60, 80, 0.2);

  @media ${theme.device.tablet} {
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding: 28px 24px;

    background: #ffffff;
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
    background: #ffffff;
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
  color: #3e4462;

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
    color: #3e4462;
  }

  @media ${theme.device.desktop} {
    margin-bottom: 50px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.24px;
    color: #3e4462;
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
  color: #23262a;

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
    color: #23262a;
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
    color: #23262a;
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
  color: #3e4462;

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
background: #22252A;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
color: #FAFAFA;
border-radius: 24px 44px;
  border: 1px solid rgb(250, 250, 250);
 &:hover {
    background: #8BAA36;
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
  background: #22252a;
  padding: 14px 28px
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fafafa;
  border-radius: 24px 44px;
  border: 1px solid rgb(250, 250, 250);
  &:hover {
    background: #8BAA36;
    }}
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
  background: #ebf3d4;
  color: #22252a;
  border-radius: 4px;
  border: 1.2px solid #22252a;
  &:hover,
  :focus {
    background: #1e1f28;
    color: #fafafa;
  }

  @media ${theme.device.tablet} {
    position: absolute;
    width: 38px;
    height: 38px;
    right: 24px;
    top: 28px;
    background: #ebf3d4;
    color: #22252a;
    border-radius: 4px;
    border: 1.2px solid #22252a;
    &:hover,
    :focus {
      background: #1e1f28;
      color: #fafafa;
    }

    @media ${theme.device.desktop} {
      position: absolute;
      width: 44px;
      height: 44px;
      right: 40px;
      top: 40px;
      background: #ebf3d4;
      border-radius: 4px;
    }
  }
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  fill: #ebf3d4;
  stroke: #22252a;
  &:hover {
    fill: #22252a;
    stroke: #fafafa;
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
