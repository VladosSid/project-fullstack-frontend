import { Link } from "react-router-dom";
import {
    NavContainer,
    RegisterBtn,
    SigninBtn
} from "./AuthNav.styled";

const AuthNav = () => {
    return (
        <NavContainer>
            <RegisterBtn>
                <Link to={"/register"} style={{color: "inherit"}}>Registration</Link>
            </RegisterBtn>
            <SigninBtn>
                <Link to={"/login"} style={{color: "inherit"}}>Sign in</Link>
            </SigninBtn>
        </NavContainer>
    )
}

export default AuthNav;