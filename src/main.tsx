import {createBrowserRouter, Navigate} from 'react-router-dom';
import {ADMIN_PATH, NOT_FOUND, SIGN_IN, SIGN_UP} from "./utils/paths";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";
import Calendar from "./pages/calendar";
import Vacations from "./pages/vacations";
import Employees from "./pages/employees";
import Messenger from "./pages/messenger";
import InfoPortal from "./pages/info-portal";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import NotFoundPage from "./pages/404";
import NearestEvents from "./pages/nearest-events";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={ADMIN_PATH.DASHBOARD} replace />,
    },
    {
        path: ADMIN_PATH.DASHBOARD,
        element: <Dashboard/>,
    },
    {
        path: ADMIN_PATH.PROJECTS, // Route for Projects
        element: <Projects/>,
    },
    {
        path: ADMIN_PATH.CALENDAR, // Route for Calendar
        element: <Calendar/>,
    },
    {
        path: ADMIN_PATH.VACATIONS, // Route for Vacations
        element: <Vacations/>,
    },
    {
        path: ADMIN_PATH.EMPLOYEES, // Route for Employees
        element: <Employees/>,
    },
    {
        path: ADMIN_PATH.MESSENGER, // Route for Messenger
        element: <Messenger/>,
    },
    {
        path: ADMIN_PATH.INFO_PORTAL, // Route for Info Portal
        element: <InfoPortal/>,
    },
    {
        path: ADMIN_PATH.NEAREST_EVENT,
        element: <NearestEvents/>,
    },
    {
        path: SIGN_IN,
        element: <SignIn/>,
    },
    {
        path: SIGN_UP,
        element: <SignUp/>,
    },
    {
        path: NOT_FOUND,
        element: <NotFoundPage/>,
    },

    {
        path: "*",
        element: <Navigate to="/404" replace />,
    },
]);

export default router;
