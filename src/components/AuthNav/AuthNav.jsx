import {
    NavContainer,
    RegisterBtn,
    SigninBtn
} from "./AuthNav.styled";

const AuthNav = () => {
    return (
        <NavContainer>
            <RegisterBtn>
                Registration
                {/* <Link to={/register>} /> */}
            </RegisterBtn>
            <SigninBtn>
                Sign in
                {/* <Link to={/login>} /> */}
            </SigninBtn>
        </NavContainer>
    )
}

export default AuthNav;