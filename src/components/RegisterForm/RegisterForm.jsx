import { 
    FiUser, 
    FiMail, 
    FiLock 
} from "react-icons/fi";
import {
    Container,
    Form,
    FormTitle
} from "./RegisterForm.styled";

const RegisterForm = () => {
    return (
        <Container>
            <Form>
                <FormTitle>Registration</FormTitle>
                <ul>
                    {/* username */}
                    <li>
                        <label
                            htmlFor="usernameInput"
                        >
                            <FiUser />
                        </label>
                        <input 
                            type="text"
                            name="username"
                            id="usernameInput"
                            required
                        />
                    </li>
                    {/* email */}
                    <li>
                        <label
                            htmlFor="emailInput"
                        >
                            <FiMail />
                        </label>
                        <input 
                            type="text"
                            name="username"
                            id="emailInput"
                            required
                        />
                    </li>
                    {/* password */}
                    <li>
                        <label
                            htmlFor="passwordInput"
                        >
                            <FiLock />
                        </label>
                        <input 
                            type="text"
                            name="username"
                            id="passwordInput"
                            required
                        />
                    </li>
                </ul>
                <button type='submit'>Sign Up</button>
            </Form>
            {/* <Link to={"/login"}>Sign In</Link> */}
        </Container>
    )
}

export default RegisterForm;