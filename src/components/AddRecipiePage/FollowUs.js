import { Icons, Follow } from './FollowUs.styled';
import { Title } from './RecipeIngridientsFields.styled';
import {
  FaFacebook,
  FaYoutubeSquare,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const FollosUs = () => {
  return (
    <Follow>
      <Title>Follow Us</Title>
      <Icons>
        <FaFacebook fill="#8BAA36" size="26" />
        <FaYoutubeSquare fill="#8BAA36" size="26" />
        <FaTwitter fill="#8BAA36" size="26" />
        <FaInstagram fill="#8BAA36" size="26" />
      </Icons>
    </Follow>
  );
};

export default FollosUs;
