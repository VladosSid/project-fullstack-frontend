import { Link } from "react-router-dom";
import {  
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
    Button,
    Redirect
} from "./SigninForm.styled";

const SigninForm = () => {
    return (
        // только разметка, стили позже
        <Container>
            <Form>
                <FormTitle>Sign In</FormTitle>
                <ul>
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
                <Button type='submit'>Sign In</Button>
            </Form>
            <Link to={"/register"}>
                <Redirect>Registration</Redirect>
            </Link>
        </Container>
    )
}

export default SigninForm;