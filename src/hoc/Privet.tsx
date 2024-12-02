import {useLocation, useNavigate} from 'react-router-dom';
import { ADMIN_PATH, SIGN_IN} from "../utils/paths";
import {useEffect} from "react";

const Private = (WrappedComponent: any, permissions?: string[]) => {
    const FuncComponent = ({children, ...props}: any) => {
        const navigate = useNavigate();
        const location = useLocation();

        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');

        useEffect(() => {

            if (username !== 'adminn' || password !== 'qwqw') {
                navigate(SIGN_IN);
                return;
            }

            if (location.pathname === SIGN_IN) {
                navigate(ADMIN_PATH.DASHBOARD);
            }
        }, [navigate, location.pathname, username, password]); // Add navigate and location.pathname to the dependency array

        return (
            <WrappedComponent {...props}>{children}</WrappedComponent>
        );
    };

    return FuncComponent;
};

export default Private;
