import { useLocation, useNavigate } from 'react-router-dom';
import { ADMIN_LOGIN, ADMIN_PATH } from "../utils/paths";
import { useEffect } from "react";

const Private = (WrappedComponent: any, permissions?: string[]) => {
    const FuncComponent = ({ children, ...props }: any) => {
        const navigate = useNavigate();
        const location = useLocation();

        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');

        useEffect(() => {


            if (username !== 'adminn' || password !== 'qwqw') {
                navigate(ADMIN_LOGIN);
                return;
            }

            if (location.pathname === ADMIN_LOGIN) {
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
