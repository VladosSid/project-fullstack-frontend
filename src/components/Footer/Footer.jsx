import { MdOutlineEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Notiflix from 'notiflix';

import logo from '../../images/Footer/logoFooter.png';
import { UseSvg } from '../../helpers/useSvg/useSvg';
import {
  FooterBox,
  FlexBox,
  BoxLogo,
  TextLogo,
  ListDescrition,
  NavList,
  BoxForm,
  BoxTitle,
  Title,
  Text,
  Input,
  Button,
  LabelForm,
  ListSocialNetworks,
  ImgSocial,
  BoxAfter,
} from './Footer.styled';

import { MainContainer } from '../MainContainer/MainContainer';

import { queryBackEnd } from '../../helpers/request';

import theme from '../../redux/theming/theme-operations';

export function Footer() {
  const [email, setEmail] = useState('');

    const dispatch = useDispatch();
  dispatch(theme.themeSwitch('white'));
  // dispatch(theme.themeSwitch('dark'));

  const getSubscription = async e => {
    e.preventDefault();
    const data = await queryBackEnd.querySubscribe(email);

    Notiflix.Notify.success(`${data.message}`);
  };

  return (
    <>
      <FooterBox>
        <MainContainer>
          <FlexBox>
            <div>
              <BoxLogo>
                {/* <a href="#"> */}
                <img src={logo} alt="" />
                <TextLogo>So Yummy</TextLogo>
                {/* </a> */}
              </BoxLogo>

              <ListDescrition>
                <li>Database of recipes that can be replenished </li>
                <li>
                  Flexible search for desired and unwanted <br />
                  ingredients
                </li>
                <li>Ability to add your own recipes with photos</li>
                <li>Convenient and easy to use</li>
              </ListDescrition>
            </div>

            <NavList>
              <li>
                <NavLink to="/search">Ingredients</NavLink>
              </li>
              <li>
                <NavLink to="/add">Add recipes</NavLink>
              </li>
              <li>
                <NavLink to="/my">My recipes</NavLink>
              </li>
              <li>
                <NavLink to="/favorite">Favorites</NavLink>
              </li>
              <li>
                <NavLink to="/shopping-list">Shopping list</NavLink>
              </li>
            </NavList>

            <BoxForm>
              <BoxTitle>
                <Title>Subscribe to our Newsletter</Title>

                <Text>
                  Subscribe up to our newsletter. Be in touch with <br /> latest
                  news and special offers, etc.
                </Text>
              </BoxTitle>
              <div
                style={{
                  position: 'relative',
                }}
              >
                <LabelForm>
                  <MdOutlineEmail style={{ scale: '1.7', fill: '#fff' }} />
                </LabelForm>

                <Input
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <Button
                disabled={email.length > 0 ? false : true}
                type="button"
                onClick={e => getSubscription(e)}
              >
                Subcribe
              </Button>
            </BoxForm>
          </FlexBox>

          <ListSocialNetworks>
            <ImgSocial>
              <UseSvg id="facebook" />
            </ImgSocial>
            <ImgSocial>
              <UseSvg id="youtube" />
            </ImgSocial>

            <ImgSocial>
              <UseSvg id="twit" />
            </ImgSocial>
            <ImgSocial>
              <UseSvg id="inst" />
            </ImgSocial>
          </ListSocialNetworks>
        </MainContainer>
      </FooterBox>
      <MainContainer>
        <BoxAfter>
          <span>© 2023 All Rights Reserved.</span>
          <span>Terms of Service</span>
        </BoxAfter>
      </MainContainer>
    </>
  );
}

export default Footer;
