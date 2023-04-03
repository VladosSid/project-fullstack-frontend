import {
  Title,
  BackgroundTopOne,
  BackgroundTopTwo,
  BackgroundTop,
  ContaynerTitle,
} from './MainPageTitle.styled';
import img from '../../images/background/Rectangle 9.jpg';
import imgTop from '../../images/background/Rectangle 8.jpg';




export const MainPageTitle = ({ title }) => {
    
    return (
      <ContaynerTitle>
        <Title>{title}</Title>
        <BackgroundTopOne src={img} alt="background" />
        <BackgroundTop src={imgTop} alt="background" />
        <BackgroundTopTwo src={img} alt="background" />
      </ContaynerTitle>
    );
   
};
  