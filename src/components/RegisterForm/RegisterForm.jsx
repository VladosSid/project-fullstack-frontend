import { 
    FiUser, 
    FiMail, 
    FiLock 
} from "react-icons/fi";

const RegisterForm = () => {
    return (
        // только разметка, стили позже
        <div>
            <h2>Registration</h2>
            <form>
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
            </form>
            {/* <Link to={"/login"}>Sign In</Link> */}
        </div>
    )
}

export default RegisterForm;