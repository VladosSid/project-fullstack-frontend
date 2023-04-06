import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchesForm } from 'components/SearchForm/SearchForm.styled';
import theme from '../../style/generalStyle';
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
import SoYummy_mob from '../../images/mainPagePhoto/SoYummy_mob-min.png';
// import unsplash_desk from '../../images/mainPagePhoto/unsplash_desk-min.png';
// import unsplash_tab from '../../images/mainPagePhoto/unsplash_tab-min.png';
import unsplash_mob from '../../images/mainPagePhoto/unsplash_mob-min.png';
import desktop_bg from '../../images/mainPagePhoto/desktop_bg.png';
//-----------------------------------------------
export const MPHeroBG = styled.div`
  width: 1240px;
  @media screen and (max-width: 767px) {
    height: 777px;
    background-repeat: no-repeat;
    background-image: url('${SoYummy_mob}'), url('${unsplash_mob}'),
      url('${blatt_mob}'), url('${blatt_l_mob}'), url('${bg_mob}');
    background-position: top 132px center, top 332px center, top 70px right 0px,
      top 10px left 10px, top 140px right 0px;
    background-size: 303px, 320px, 375px, 60px, 280px;
  }

  @media ${theme.device.tablet} {
    height: 640px;
    /* padding-left: 32px;
    padding-right: 32px;
    gap: 50px; */
  }

  @media screen and (min-width: 1240px) {
    height: 800px;
    background-repeat: no-repeat;
    background-image: url('${desktop_bg}');
    background-size: content;
    background-position: center center;
    /* gap: 100px;
    padding-left: 99px;
    padding-right: 99px; */
  }
`;

// export const MPHeroWrapper = styled.div`
//   /* padding-top: 71px; */
//   padding-bottom: 147px;
// `;

export const MPHeroText = styled.span`
  display: block;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #23262a;
  @media screen and (min-width: 1240px) {
    margin-left: 107px;
    margin-top: 340px;
    margin-bottom: 50px;
    width: 465px;
  }
`;

export const MPHeroProduct = styled.span`
  display: block;
  margin-bottom: 7px;
  width: 298px;
  padding: 16px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;

  letter-spacing: -0.24px;

  color: #3e4462;

  background-color: #ffffff;
  border-radius: 8px;
  @media screen and (min-width: 1240px) {
    margin-left: 820px;
  }
`;
export const GreenSpan = styled.span`
  color: #8baa36;
`;

export const StyledLink = styled(Link)`
  margin-left: 200px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #3e4462;
`;
