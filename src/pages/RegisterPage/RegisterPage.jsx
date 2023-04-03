import RegisterForm from "components/RegisterForm";
import {
    Container,
    Background
} from "./RegisterPage.styled";

const RegisterPage = () => {
    return (
        <Container>
            <Background>
                <RegisterForm />
            </Background>
        </Container>
    )
}

export default RegisterPage;