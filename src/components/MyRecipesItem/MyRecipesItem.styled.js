import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  /* flex-direction: row; */
  /* justify-content: center;
align-items: center; */
  padding: 14px 9px;
  margin-bottom: 14px;
  background: #ffffff;
  border-radius: 8px;

  @media ${theme.device.tablet} {
    position: relative;
    display: flex;
    /* flex-direction: row */
    /* justify-content: center;
align-items: center; */
    padding: 28px 24px;
    margin-bottom: 8px;
    background: #ffffff;
    border-radius: 8px;
  }

  @media ${theme.device.desktop} {
    position: relative;
    /* display: flex;
flex-direction: row;
align-items: flex-start; */
    padding: 40px;
    margin-bottom: 50px;
    background: #ffffff;
    border-radius: 8px;
  }
`;

export const CardImg = styled.img`
display: block,
width: 124px;
height: 124px;
border-radius: 8px;
/* Inside auto layout */

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
border-radius: 8px;
}
`;

export const CardTextWrapper = styled.div`
  /* width: 187px; */
  height: 124px;
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Inside auto layout */

  @media ${theme.device.tablet} {
    /* width: 420px; */
    height: 232px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${theme.device.desktop} {
    /* width: 800px; */
    height: 324px;
    margin-left: 50px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const CardTitle = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */
  letter-spacing: -0.24px;
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
    color: #3e4462;
  }

  @media ${theme.device.desktop} {
    margin-bottom: 40px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    /* identical to box height, or 100% */
    letter-spacing: -0.24px;
    color: #3e4462;
  }
`;

export const CardDescription = styled.p`
  display: inline-block;
  max-height: 50px;
  width: 163px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  /* or 125% */
  letter-spacing: -0.02em;
  color: #23262a;

  @media ${theme.device.tablet} {
    /* display: inline-block; */
    max-height: 110px;
    width: 404px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;
  }

  @media ${theme.device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;
    width: 800px;
    height: 140px;
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
  letter-spacing: -0.24px;
  color: #3e4462;
  /* flex: none;
order: 0;
flex-grow: 0; */

  @media ${theme.device.tablet} {
    display: inline-block;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    letter-spacing: -0.24px;
    color: #3e4462;
  }

  @media ${theme.device.desktop} {
    display: inline-block;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.24px;
    color: #3e4462;
  }
`;

export const CardButtonSee = styled.button`
position: absolute;
width: 87px;
height: 27px;
right: 9px;
bottom: 14px;
color: #FAFAFA;
background: #8BAA36;
border-radius: 24px 44px;
  border: 1px solid rgb(250, 250, 250);
 &:hover {
    background: #22252A;
    }

@media ${theme.device.tablet} {
  position: absolute;
width: 138px;
height: 45px;
right: 24px;
bottom: 28px;
background: #8BAA36;
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
    background: #22252A;
    }
}

@media ${theme.device.desktop} {
  /* background-color: transparent; */
  position: absolute;
width: 172px;
height: 59px;
right: 40px;
bottom: 40px;
background: #8BAA36;
  padding: 18px 44px
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FAFAFA;
  border-radius: 24px 44px;
  border: 1px solid rgb(250, 250, 250);
  &:hover {
    background: #22252A;
    }}
`;

export const CardButtonDelete = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 9px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fafafa;
  background: #8baa36;
  border-radius: 4px;
  border-color: transparent;
  &:hover,
  :focus {
    background: #22252a;
  }

  @media ${theme.device.tablet} {
    position: absolute;
    width: 38px;
    height: 38px;
    right: 24px;
    top: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fafafa;
    background: #8baa36;
    border-radius: 4px;
    &:hover,
    :focus {
      background: #22252a;
    }
  }

  @media ${theme.device.desktop} {
    position: absolute;
    width: 44px;
    height: 44px;
    right: 40px;
    top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fafafa;
    background: #8baa36;
    border-radius: 4px;
    &:hover,
    :focus {
      background: #22252a;
    }
  }
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  fill: #8baa36;
  stroke: #ebf3d4;
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
