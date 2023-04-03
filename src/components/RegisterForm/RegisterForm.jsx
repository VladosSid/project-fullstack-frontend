import { 
    FiUser, 
    FiMail, 
    FiLock 
} from "react-icons/fi";
import {
    Container,
    Form,
    FormTitle,
    ListItem,
    Label,
    Input,
    Button
} from "./RegisterForm.styled";

const RegisterForm = () => {
    return (
        <Container>
            <Form>
                <FormTitle>Registration</FormTitle>
                <ul>
                    {/* username */}
                    <ListItem>
                        <Label
                            htmlFor="usernameInput"
                        >
                            <FiUser />
                        </Label>
                        <Input 
                            type="text"
                            name="username"
                            placeholder="Name"
                            id="usernameInput"
                            required
                        />
                    </ListItem>
                    {/* email */}
                    <ListItem>
                        <Label
                            htmlFor="emailInput"
                        >
                            <FiMail />
                        </Label>
                        <Input 
                            type="text"
                            name="email"
                            placeholder="Email"
                            id="emailInput"
                            required
                        />
                    </ListItem>
                    {/* password */}
                    <ListItem>
                        <Label
                            htmlFor="passwordInput"
                        >
                            <FiLock />
                        </Label>
                        <Input 
                            type="text"
                            name="password"
                            placeholder="Password"
                            id="passwordInput"
                            required
                        />
                    </ListItem>
                </ul>
                <Button type='submit'>Sign Up</Button>
            </Form>
            {/* <Link to={"/login"}>Sign In</Link> */}
        </Container>
    )
}

export default RegisterForm;