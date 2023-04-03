import { MdOutlineEmail } from 'react-icons/md';
import { useDispatch } from 'react-redux';
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
} from './Footer.styled';

import { authOperations } from '../../redux/users';

export function Footer() {
  const dispatch = useDispatch();

  const setTest = e => {
    e.preventDefault();

    try {
      dispatch(
        authOperations.logIn({
          email: 'sidorsv.dev@meta.ua',
          password: '123456',
        })
        // authOperations.logOut()
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  const setTestOut = e => {
    e.preventDefault();

    try {
      dispatch(authOperations.logOut());
    } catch (err) {
      console.log(err.message);
    }
  };
  const setTestCurrent = e => {
    e.preventDefault();

    try {
      dispatch(authOperations.fetchCurrentUser());
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <FooterBox>
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
          <li>Ingredients</li>
          <li>Add recipes</li>
          <li>My recipes</li>
          <li>Favorite</li>
          <li>Shopping list</li>
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
              name="email"
              type="text"
            />
          </div>

          <Button type="button" onClick={e => setTest(e)}>
            Subcribe(LogIn)
          </Button>
          <Button type="button" onClick={e => setTestOut(e)}>
            LogOuth
          </Button>
          <Button type="button" onClick={e => setTestCurrent(e)}>
            Current
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
    </FooterBox>
  );
}

export default Footer;
