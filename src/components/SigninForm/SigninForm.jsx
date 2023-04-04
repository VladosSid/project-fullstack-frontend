import { Link } from "react-router-dom";
import {  
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
} from "./SigninForm.styled";

const SigninForm = () => {
    return (
        <Container>
            <Form>
                <FormTitle>Sign In</FormTitle>
                <List>
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
                <Button type='submit'>Sign In</Button>
            </Form>
            <Link to={"/register"}>
                <Redirect>Registration</Redirect>
            </Link>
        </Container>
    )
}

export default SigninForm;