import { 
    FiUser, 
    FiMail, 
    FiLock 
} from "react-icons/fi";
import {
    Container,
    Form,
    FormTitle,
    Input
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
                        <Input 
                            type="text"
                            name="username"
                            placeholder="Name"
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
                        <Input 
                            type="text"
                            name="email"
                            placeholder="Email"
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
                        <Input 
                            type="text"
                            name="password"
                            placeholder="Password"
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