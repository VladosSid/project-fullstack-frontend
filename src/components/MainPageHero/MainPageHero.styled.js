import styled from 'styled-components';
import theme from '../../style/generalStyle';
import { Link } from 'react-router-dom';
// import { SearchesForm } from 'components/SearchForm/SearchForm.styled';
// import theme from '../../style/generalStyle';
// import bg_desk from '../../images/mainPagePhoto/bg_desk-min.png';
// import bg_tab from '../../images/mainPagePhoto/bg_tab-min.png';
import bg_mob from '../../images/mainPagePhoto/bg_mob-min.png';
// import blatt_desk from '../../images/mainPagePhoto/blatt_desk-min.png';
// import blatt_tab from '../../images/mainPagePhoto/blatt_tab-min.png';
import blatt_mob from '../../images/mainPagePhoto/blatt_mob-min.png';
// import blatt_l_desk from '../../images/mainPagePhoto/blatt_l_desk-min.png';
// import blatt_l_tab from '../../images/mainPagePhoto/blatt_l_tab-min.png';
import blatt_l_mob from '../../images/mainPagePhoto/blatt_l_mob-min.png';
// import SoYummy_desk from '../../images/mainPagePhoto/SoYummy_desk-min.png';
// import SoYummy_tab from '../../images/mainPagePhoto/SoYummy_tab-min.png';
// import SoYummy_mob from '../../images/mainPagePhoto/SoYummy_mob-min.png';
// import unsplash_desk from '../../images/mainPagePhoto/unsplash_desk-min.png';
// import unsplash_tab from '../../images/mainPagePhoto/unsplash_tab-min.png';
import unsplash_mob from '../../images/mainPagePhoto/unsplash_mob-min.png';
import desktop_bg from '../../images/mainPagePhoto/desktop_bg_1440.png';
import tablet_bg from '../../images/mainPagePhoto/tablet_bg.png';

//-----------------------------------------------
export const MPHeroBG = styled.section`
  margin: 0 auto;
  /* position: relative; */
  /* width: 100%; */
  @media screen and (max-width: 768px) {
    /* width: 100%; */
    /* height: 791px; */
    padding-top: 132px;
    padding-bottom: 97px;
    background-repeat: no-repeat;
    background-image: url('${unsplash_mob}'), url('${blatt_mob}'),
      url('${blatt_l_mob}'), url('${bg_mob}');
    background-position: top 322px center, top 70px right 0px, top 10px left 0px,
      top 140px right 0px;
    background-size: 320px, 375px, 60px, 280px;
  }
  @media ${theme.device.tablet} {
    /* max-width: 768px; */
    padding-top: 224px;
    padding-bottom: 168px;
    background-repeat: no-repeat;
    background-image: url('${tablet_bg}');
    background-size: cover;
    background-position: center center;
  }
  @media ${theme.device.desktop} {
    padding-top: 226px;
    padding-bottom: 224px;
    max-width: 1440px;
    background-repeat: no-repeat;
    background-image: url('${desktop_bg}');
    background-size: cover;
    background-position: center center;
  }
`;

export const MPContainer = styled.div`
  width: 359px;
  margin: 0 auto;
  padding: 0 8px;
  @media screen and (max-width: 768px) {
    position: relative;
  }
  @media ${theme.device.tablet} {
    width: 704px;
    margin: 0 auto;
    padding: 0 32px;
  }
  /* position: relative; */
  @media ${theme.device.desktop} {
    width: 1240px;
    margin: 0 auto;
    padding: 0 32px;
  }
`;
export const MPHeroSection = styled.div`
  /* @media screen and (max-width: 768px) { */
  /* width: 307px;
    margin: 0 auto; */
  /* } */
  @media ${theme.device.tablet} and (max-width: 1303px) {
    /* position: relative;
    width: 703px;
    margin: 0 auto; */
  }
  @media ${theme.device.desktop} {
    /* position: relative; */
  }
`;

export const MPHeroTitle = styled.h1`
  color: #8baa36;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  letter-spacing: -0.005em;
  margin-bottom: 14px;
  span {
    color: ${props => props.theme.color.mainPageTitle.colorTitle};
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media ${theme.device.tablet} {
    margin-bottom: 24px;
    font-size: 72px;
  }
  @media ${theme.device.desktop} {
    margin-bottom: 14px;
    font-size: 100px;
  }
`;

export const MDHeroFlex = styled.div`
  @media ${theme.device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media ${theme.device.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;
export const MPHeroText = styled.span`
  display: block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  color: ${props => props.theme.color.mainPage.mpHeroText};
  width: 248px;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0 auto 364px;
  }
  @media ${theme.device.tablet} {
    margin-bottom: 18px;
    width: 362px;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }
  @media ${theme.device.desktop} {
    margin-left: 0px;
    margin-bottom: 50px;
    width: 465px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.02em;
  }
`;

export const MPHeroProduct = styled.span`
  display: block;
  width: 225px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${props => props.theme.color.mainPage.mpHeroProductColor};

  background-color: ${props =>
    props.theme.color.mainPage.mpHeroProductBackground};
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    position: absolute;
    padding: 8px;
    top: 303px;
    right: 27px;
  }
  @media ${theme.device.tablet} and (max-width: 1304px) {
    width: 260px;
    padding: 12px;
    font-size: 14px;
    line-height: 1.29;
  }
  @media ${theme.device.desktop} {
    width: 298px;
    padding: 16px;
    font-size: 14px;
    line-height: 1.43;
  }
`;
export const GreenSpan = styled.span`
  color: #8baa36;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 7px;
  color: ${props => props.theme.color.mainPage.mpHeroProductColor};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.2px;
  margin-left: 135px;
  font-size: 10px;
  line-height: 1.2;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #8baa36;
  }
  @media ${theme.device.tablet} {
    margin-left: 164px;
    font-size: 10px;
  }
  @media ${theme.device.desktop} {
    margin-left: 200px;
    font-size: 10px;
  }
`;
