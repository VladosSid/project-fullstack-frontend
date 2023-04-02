import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";
// import { useAuth } from "hooks";


const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {

    // as example
    // const { isLoggedIn, isRefreshing } = useAuth();
    // const shouldRedirect = !isRefreshing && !isLoggedIn;

    let shouldRedirect = false;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    component: PropTypes.object,
    redirectTo: PropTypes.string
}