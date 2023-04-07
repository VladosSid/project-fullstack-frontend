import styled from 'styled-components';
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
import desktop_bg from '../../images/mainPagePhoto/desktop_bg3.png';
import tablet_bg from '../../images/mainPagePhoto/tablet_bg.png';
//-----------------------------------------------
export const MPHeroBG = styled.div`
  position: relative;
  width: 100%;
  @media screen and (max-width: 767px) {
    height: 841px;
    background-repeat: no-repeat;
    background-image: url('${unsplash_mob}'), url('${blatt_mob}'),
      url('${blatt_l_mob}'), url('${bg_mob}');
    background-position: top 322px center, top 70px right 0px, top 10px left 0px,
      top 140px right 0px;
    background-size: 320px, 375px, 60px, 280px;
  }

  @media screen and (min-width: 768px) {
    height: 640px;
    /* width: 768px; */
    background-repeat: no-repeat;
    background-image: url('${tablet_bg}');
    background-size: cover;
    background-position: center center;
  }

  @media screen and (min-width: 1240px) {
    position: relative;

    height: 688px;
    background-repeat: no-repeat;
    background-image: url('${desktop_bg}');
    background-size: cover;
    /* background-position: center center; */
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
  margin-top: 132px;
  margin-bottom: 14px;
  span {
    color: #22252a;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    margin-left: 32px;
    margin-top: 204px;
    margin-bottom: 24px;
    font-size: 72px;
  }
  @media screen and (min-width: 1240px) {
    margin-left: 100px;
    margin-top: 226px;
    margin-bottom: 14px;

    font-size: 100px;

    /* width: 465px; */
  }
`;
export const MPHeroText = styled.span`
  display: block;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;

  color: #23262a;
  width: 248px;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  @media screen and (max-width: 767px) {
    text-align: center;
    margin: 0 auto 364px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 38px;
    margin-bottom: 32px;
    width: 362px;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }
  @media screen and (min-width: 1240px) {
    margin-left: 107px;
    margin-bottom: 50px;
    width: 465px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.02em;
  }
`;

export const MPHeroProduct = styled.span`
  position: absolute;
  display: block;
  width: 225px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: #3e4462;

  background-color: #ffffff;
  border-radius: 8px;

  @media screen and (max-width: 767px) {
    padding: 8px;
    top: 435px;
    left: 116px;
  }

  @media screen and (min-width: 768px) {
    width: 260px;

    right: 43px;
    top: 372px;

    padding: 12px;
    font-size: 14px;
    line-height: 1.29;
  }
  @media screen and (min-width: 1240px) {
    width: 298px;

    left: 820px;
    top: 462px;
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
  color: #3e4462;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.2px;
  margin-left: 135px;
  font-size: 10px;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    margin-left: 164px;
    font-size: 10px;
  }
  @media screen and (min-width: 1240px) {
    margin-left: 200px;
    font-size: 10px;
  }
`;
