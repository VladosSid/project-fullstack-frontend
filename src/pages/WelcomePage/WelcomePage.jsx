import Logo from "components/Logo";
import WelcomePageHero from "components/WelcomePageHero";
import AuthNav from "components/AuthNav";
import { Container } from "./WelcomePage.styled";

const WelcomePage = () => {
    return (
        <Container>
            <Logo />
            <WelcomePageHero />
            <AuthNav />
        </Container>
    );
}

export default WelcomePage;