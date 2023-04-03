import {
    HeroContainer,
    WelcomeLogo,
    WelcomeTitle
} from "./WelcomePageHero.styled";
import logo from '../../images/Header/logo.svg';

const WelcomePageHero = () => {
    return (
        <HeroContainer>
            <WelcomeLogo>
                <img src={logo} alt="logo" width="100%" height="100%" />
            </WelcomeLogo>
            <WelcomeTitle>Welcome to the app</WelcomeTitle>
            <p>This app offers more than just a collection of recipes -
                it is designed to be your very own digital cookbook.
                You can easily save and retrieve your own recipes at any time.</p>
        </HeroContainer>
    )
}

export default WelcomePageHero;