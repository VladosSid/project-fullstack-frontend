import {
    NavContainer,
    RegisterBtn,
} from "./AuthNav.styled";

const AuthNav = () => {
    return (
        <NavContainer>
            <RegisterBtn>
                Registration
                {/* <Link to={/register>} /> */}
            </RegisterBtn>
            <button>
                {/* <Link to={/login>} /> */}
            </button>
        </NavContainer>
    )
}

export default AuthNav;