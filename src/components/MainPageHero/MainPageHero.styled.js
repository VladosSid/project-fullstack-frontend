import styled from 'styled-components';
import bg_desk from '../../images/mainPagePhoto/bg_desk-min.png';
import bg_tab from '../../images/mainPagePhoto/bg_tab-min.png';
import bg_mob from '../../images/mainPagePhoto/bg_mob-min.png';
import blatt_desk from '../../images/mainPagePhoto/blatt_desk-min.png';
import blatt_tab from '../../images/mainPagePhoto/blatt_tab-min.png';
import blatt_mob from '../../images/mainPagePhoto/blatt_mob-min.png';
import blatt_l_desk from '../../images/mainPagePhoto/blatt_l_desk-min.png';
import blatt_l_tab from '../../images/mainPagePhoto/blatt_l_tab-min.png';
import blatt_l_mob from '../../images/mainPagePhoto/blatt_l_mob-min.png';
import SoYummy_desk from '../../images/mainPagePhoto/SoYummy_desk-min.png';
import SoYummy_tab from '../../images/mainPagePhoto/SoYummy_tab-min.png';
import SoYummy_mob from '../../images/mainPagePhoto/SoYummy_mob-min.png';
import unsplash_desk from '../../images/mainPagePhoto/unsplash_desk-min.png';
import unsplash_tab from '../../images/mainPagePhoto/unsplash_tab-min.png';
import unsplash_mob from '../../images/mainPagePhoto/unsplash_mob-min.png';
//-----------------------------------------------
export const MPHeroBG = styled.div`
  width: 100%;
  height: 900px;
  background-repeat: no-repeat;
  background-image: url('${SoYummy_mob}'), url('${unsplash_mob}'),
    url('${blatt_mob}'), url('${blatt_l_mob}'), url('${bg_mob}');
  background-position: top 132px center, top 332px center, top 70px right 0px,
    top 10px left 0px, top 140px right 0px;
  background-size: 303px, 320px, 375px, 60px, 280px;
`;

export const MPHeroWrapper = styled.div`
  /* padding-top: 71px; */
  padding-bottom: 147px;
`;
