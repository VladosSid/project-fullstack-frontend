import {  
    FiMail, 
    FiLock 
} from "react-icons/fi";

const SigninForm = () => {
    return (
        // только разметка, стили позже
        <div>
            <h2>Sign In</h2>
            <form>
                <ul>
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
                <button type='submit'>Sign In</button>
            </form>
            {/* <Link to={"/register"}>Registration</Link> */}
        </div>
    )
}

export default SigninForm;