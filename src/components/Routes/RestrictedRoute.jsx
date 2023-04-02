import { PropTypes } from "prop-types";
const { Navigate } = require("react-router-dom");
// import { useAuth } from "hooks";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {

    // add own hook or execution condition
    // as example:
    // const { isLoggedIn } = useAuth();

    const { isLoggedIn } = false;

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};


RestrictedRoute.propTypes ={
    component: PropTypes.object,
    redirectTo: PropTypes.string
}

export default RestrictedRoute;