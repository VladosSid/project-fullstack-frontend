import {
  Title,
  BackgroundTopOne,
  BackgroundTopBlack,
  BackgroundTop,
  ContaynerTitle,
} from './MainPageTitle.styled';
import img from '../../images/background/green-point.png';
import imgTop from '../../images/background/black_point.png';




export const MainPageTitle = ({ title }) => {
    
    return (
      <ContaynerTitle>
        <Title>{title}</Title>
        <BackgroundTopOne src={img} alt="background" />
        <BackgroundTop src={imgTop} alt="background" />
        <BackgroundTopBlack src={img} alt="background" />
      </ContaynerTitle>
    );
   
};
  