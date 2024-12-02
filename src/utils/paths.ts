//Site
export const HOME = '/';
export const SIGN_IN = '/sign-in';
export const SIGN_UP = '/sign-up';
export const EMAIL_VERIFICATION = `${SIGN_UP}/email-verification`;
export const PASSWORD = '/password';
export const TERMS_AND_CONDITIONS = "terms-of-use";

//Errors
export const NOT_PERMISSIONS = '/403';
export const NOT_FOUND = '/404';


//Account
export const ACCOUNT = '/account';

//ADMIN
export const ADMIN_MAIN = '';
export const ADMIN_LOGIN = ADMIN_MAIN + '/sign-in';
export const ADMIN_PATH = {
    RESET_PASSWORD: ADMIN_MAIN + '/password/reset',

    DASHBOARD: ADMIN_MAIN + '/dashboard',
    PROJECTS: ADMIN_MAIN + '/projects',
    CALENDAR: ADMIN_MAIN + '/calendar',
    VACATIONS: ADMIN_MAIN + '/vacations',
    EMPLOYEES: ADMIN_MAIN + '/employees',
    MESSENGER: ADMIN_MAIN + '/messenger',
    INFO_PORTAL: ADMIN_MAIN + '/info-portal',
};

//Style Guide
export const STYLE_GUIDE_FORM = '/style_guide/form';
export const STYLE_GUIDE_UI = '/style_guide/ui';
export const STYLE_GUIDE_SITE = '/style_guide/site';