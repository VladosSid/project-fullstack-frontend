import { Link } from "react-router-dom";
import { 
    FiUser, 
    FiMail, 
    FiLock 
} from "react-icons/fi";
import {
    Container,
    Form,
    FormTitle,
    List,
    ListItem,
    Label,
    Input,
    Button,
    Redirect
} from "./RegisterForm.styled";

const RegisterForm = () => {
    return (
        <Container>
            <Form>
                <FormTitle>Registration</FormTitle>
                <List>
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
                </List>
                <Button type='submit'>Sign Up</Button>
            </Form>
            <Link to={"/login"}>
                <Redirect>Sign In</Redirect>
            </Link>
        </Container>
    )
}

export default RegisterForm;