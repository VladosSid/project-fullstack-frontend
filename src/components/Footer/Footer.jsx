import { MdOutlineEmail } from 'react-icons/md';
import Notiflix from 'notiflix';

import { useState } from 'react';

// import { useDispatch } from 'react-redux';
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

// import { authOperations } from '../../redux/users';

// import { recipeOperations } from '../../redux/recipe';

import { queryBackEnd } from '../../helpers/request';

export function Footer() {
  // const [file, setFile] = useState(null);
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const getSubscription = async e => {
    e.preventDefault();
    const data = await queryBackEnd.querySubscribe(email);
    console.log(data);
    Notiflix.Notify.success(`${data.message}`);
  };
  // const setTest = async e => {
  //   e.preventDefault();

  //   const result = await queryBackEnd.queryCategoryList();
  //   console.log(result);
  //   try {
  //     dispatch(
  //       authOperations.logIn({
  //         email: 'sidorsv.dev@meta.ua',
  //         password: '123456',
  //       })
  //     );
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // const setTestOut = e => {
  //   e.preventDefault();

  //   try {
  //     dispatch(authOperations.logOut());
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // const setTestCurrent = e => {
  //   e.preventDefault();

  //   try {
  //     dispatch(authOperations.fetchCurrentUser());
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // const setCategory = e => {
  //   e.preventDefault();

  //   try {
  //     dispatch(recipeOperations.allIngredients());
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // const uploadContent = e => {
  //   e.preventDefault();
  //   setFile(e.target.files[0]);

  //   const formData = new FormData();

  //   if (e.target.files[0]) {
  //     formData.append('username', 'Vlados');
  //     formData.append('img', file);

  //     dispatch(authOperations.updateUserData(formData));
  //   }
  // };

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
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              {/* <input
            type="file"
            accept="image/png, image/jpeg"
            id="contained-button-content"
            onChange={e => uploadContent(e)}
          /> */}

              <Button type="button" onClick={e => getSubscription(e)}>
                Subcribe
              </Button>
              {/* <Button type="button" onClick={e => setTestOut(e)}>
            LogOuth
          </Button>
          <Button type="button" onClick={e => setTestCurrent(e)}>
            Current
          </Button>
          <Button type="button" onClick={e => setCategory(e)}>
            Category
          </Button> */}
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
