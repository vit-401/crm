import React, {useEffect} from 'react';
import { ADMIN_PATH} from "../utils/paths";
import {useLocation, useNavigate} from "react-router-dom";


const Authorize = (WrappedComponent: any) => {
    const FuncComponent = ({ children, ...props }: any) => {

        const navigate = useNavigate();
        const location = useLocation();

        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');

        useEffect(() => {

            if (username == 'adminn' || password == 'qwqw') {
                navigate(ADMIN_PATH.DASHBOARD);
                return;
            }


        }, [navigate, location.pathname, username, password]); // Add navigate and location.pathname to the dependency array


        return  <WrappedComponent {...props}>{children}</WrappedComponent>;
    };

    return FuncComponent;
}

export default Authorize;