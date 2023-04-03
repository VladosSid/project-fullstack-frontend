import styled from 'styled-components';
import theme from '../style/generalStyle';

export const CardWrapper = styled.div`
position: relative;
display: flex,
justify-content: flex-start;
padding: 14px;
width: 343px;
height: 152px;
background: #FFFFFF;
border-radius: 8px;

@media {theme.device.tablet} {
    position: relative;
    display: flex,
justify-content: flex-start;
padding: 28px 24px;
width: 704px;
height: 288px;
left: 32px;
top: 268px;
background: #FFFFFF;
border-radius: 8px;
}

@media {theme.device.desktop} {
position: relative,
display: flex,
justify-content: flex-start;
padding: 40px;
width: 1240px;
height: 404px;
background: #FFFFFF;
border-radius: 8px;}
`;

export const CardImg = styled.img`
display: block,
margin-right: 14px;
width: 124px;
height: 124px;
border-radius: 8px;

@media {theme.device.tablet} {
    display: block,
margin-right: 24px;
width: 228px;
height: 232px;
border-radius: 8px;
}

@media {theme.device.desktop} {
display: block,
margin-right: 40px;
width: 318px;
height: 324px;
border-radius: 8px;}
`;

export const CardTextWrapper = styled.img`
 height: 124px;
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media {theme.device.tablet} {
     height: 232px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }

@media {theme.device.desktop} {
  height: 324px;
  width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;}
`;

export const CardTitle = styled.h3`
margin-bottom: 14px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 14px;/* identical to box height, or 100% */
letter-spacing: -0.24px;
/* Color - Text Primary */
color: #3E4462; 

@media {theme.device.tablet} {
    margin-bottom: 28px;
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 24px;
/* identical to box height, or 100% */
letter-spacing: -0.24px;
/* Color - Text Primary */
color: #3E4462;
}

@media {theme.device.desktop} {
  margin-bottom: 50px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 44px;
  /* identical to box height, or 100% */
  letter-spacing: -0.02em;
  color: #001833;}
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
color: #23262A;

@media {theme.device.tablet} {
    display: inline-block;
  max-height: 80px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
/* or 129% */
letter-spacing: -0.02em;
color: #23262A;
}

@media {theme.device.desktop} {
  display: inline-block;
  max-height: 160px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */
  letter-spacing: -0.02em;
  color: #23262a;}
`;

export const CardTime = styled.p`
display: inline-block;

@media {theme.device.tablet} {
    display: inline-block;
}

@media {theme.device.desktop} {
  display: inline-block;}
`;

export const CardButtonSee = styled.button`
display: none;

@media {theme.device.tablet} {
    position: absolute;
width: 138px;
height: 45px;
left: 542px;
top: 215px;
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

@media {theme.device.desktop} {
  /* background-color: transparent; */
  position: absolute;
left: 1040px;
top: 310px;
  width: 160px;
height: 54px;
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
width: 24px;
height: 24px;
left: 305px;
top: 114px;
background: #EBF3D4;
border-radius: 4px;

@media {theme.device.tablet} {
    position: absolute;
width: 38px;
height: 38px;
left: 642px;
top: 28px;
background: #EBF3D4;
border-radius: 4px;
}

@media {theme.device.desktop} {
  position: absolute;
  width: 44px;
  height: 44px;
  left: 1156px;
  top: 40px;
  background: #ebf3d4;
  border-radius: 4px;}
`;
