import React, {ReactNode, useEffect, useLayoutEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import LayersIcon from '@mui/icons-material/Layers';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import GroupIcon from '@mui/icons-material/Group';
import styles from './style.module.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from "../../images/index.svg"
import ForumIcon from '@mui/icons-material/Forum';
import {Button, Drawer} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {DrawerHeader, DrawerSideBar} from './components/DrawerSideBar';
import NavItem from "./navItem";
import { ADMIN_PATH, SIGN_IN} from "../../utils/paths";
import {PERMISSIONS} from "../../utils/permitions";
import {usePermissions} from "../../hooks/access/usePermissions";
import LanguageIcon from '@mui/icons-material/Language';

interface NavBarProps {
    onMobileClose: () => void;
    openMobile: boolean;
}

interface Item {
    href: string;
    icon?: any;
    info?: ReactNode;
    items?: Item[];
    title: string;
    permission: boolean;
}

interface Section {
    items: Item[];
    subheader: string;
}

type RenderNavItemsPropsType = {
    items: Item[];
    depth?: number;
    isOpenNavBar: boolean;
};
const renderNavItems = ({
                            items,
                            depth = 0,
                            isOpenNavBar,
                            location,
                        }: RenderNavItemsPropsType & { location: any }) => {
    return (
        <List disablePadding>
            {items.reduce(
                (acc: any[], item: Item) =>
                    reduceChildRoutes({acc, item, depth, isOpenNavBar, location}),
                [],
            )}
        </List>
    );
};


const reduceChildRoutes = ({
                               acc,
                               item,
                               depth,
                               isOpenNavBar,
                               location,
                           }: {
    acc: any[];
    item: Item;
    depth: number;
    isOpenNavBar: boolean;
    location: any;
}) => {
    const key = item.title + depth;

    let open = false;
    if (item.href !== '/admin' && location.pathname.indexOf(item.href.split('?')[0]) >= 0) open = true;
    if (item.href === '/admin' && location.pathname === item.href.split('?')[0]) open = true;

    item.permission &&
    acc.push(
        <NavItem
            depth={depth}
            href={item.href}
            icon={item.icon}
            info={item.info}
            open={open}
            key={key}
            title={item.title}
            isOpenNavBar={isOpenNavBar}
        />,
    );

    return acc;
};


const NavBar = (props: NavBarProps) => {
    const {onMobileClose, openMobile} = props;
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleLogout = async (): Promise<void> => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');

        navigate(SIGN_IN)
    };
    const location = useLocation(); // Use the hook here
    const {hasPermission} = usePermissions()

    const sections = [
        {
            subheader: '',
            items: [
                {
                    title: 'Dashboard',
                    icon: DashboardIcon,
                    href: ADMIN_PATH.DASHBOARD, // Replace with actual path
                    permission: hasPermission([PERMISSIONS.DASHBOARD_READ]),
                },
                {
                    title: 'Projects',
                    icon: LayersIcon,
                    href: ADMIN_PATH.PROJECTS, // Replace with actual path
                    permission: hasPermission([PERMISSIONS.PROJECTS_READ]),
                },
                {
                    title: 'Calendar',
                    icon: EventNoteIcon,
                    href: ADMIN_PATH.CALENDAR, // Replace with actual path
                    permission: hasPermission([PERMISSIONS.CALENDAR_READ]),
                },
                {
                    title: 'Vacations',
                    icon: AirplanemodeActiveIcon,
                    href: ADMIN_PATH.VACATIONS, // Replace with actual path
                    permission: hasPermission([PERMISSIONS.VACATIONS_READ]),
                },
                {
                    title: 'Employees',
                    icon: GroupIcon,
                    href: ADMIN_PATH.EMPLOYEES, // Replace with actual path
                    permission: hasPermission([PERMISSIONS.EMPLOYEES_READ]),
                },
                {
                    title: 'Messenger',
                    icon: ForumIcon,
                    href: ADMIN_PATH.MESSENGER, // Replace with actual path
                    permission: hasPermission([PERMISSIONS.MESSENGER_READ]),
                },
                {
                    title: 'Info Portal',
                    icon: LanguageIcon,
                    href: ADMIN_PATH.INFO_PORTAL, // Replace with actual path
                    permission: hasPermission([PERMISSIONS.INFO_PORTAL_READ]),
                },

            ],
        },
    ];

    const handleDrawer = () => {
        setOpen(!open);
        localStorage.setItem('isOpenDrawer', `${!open}`);
    };
    useEffect(() => {
      if (openMobile && onMobileClose) {
        onMobileClose();
      }
    }, []);

    useLayoutEffect(() => {
      const isOpenDrawer = localStorage.getItem('isOpenDrawer');
      const parsedValue = isOpenDrawer && JSON.parse(isOpenDrawer);
      setOpen(parsedValue ?? true);
    }, []);

    const content = (
        <Box
            height="100%"
            className={styles.navigation}
            display="flex"
            flexDirection="column"
            // style={{ marginTop: open ? 'auto' : '128px' }}
        >
            <div className={styles.logo}>
                <img src={Logo} alt="logo"/>
            </div>
            <div style={{paddingRight: open ? 20 : 0}} className={styles.profile_content}>
                {/*<div className={styles.scroll}>*/}


                {<Divider className={styles.divider} style={{backgroundColor: open ? 'auto' : 'transparent'}}/>}
                <Box className={styles.listWrap}>
                    {sections.map((section) => (
                        <List
                            key={section.subheader}
                            subheader={
                                <ListSubheader disableGutters disableSticky>
                                    {section.subheader}
                                </ListSubheader>
                            }
                        >
                            {renderNavItems({
                                items: section.items,
                                isOpenNavBar: open,
                                location
                            })}
                        </List>
                    ))}
                    <Box p={2} className={styles.nav_profile}
                         style={{backgroundColor: open ? `rgba(125, 133, 146, 0.23)` : undefined}}>
                        {
                            open ? <div>
                                    <h6>superadminuser</h6>
                                    <p>superadminuser@gmail...</p>
                                </div>
                                : null
                        }
                        <IconButton onClick={handleLogout}>
                            <LogoutIcon style={{color: '#000'}}/>
                        </IconButton>

                    </Box>
                </Box>

                {/*</div>*/}
            </div>
        </Box>
    );

    return (
        <>
            <Box className={styles.laptopSideBar}>
                <Drawer
                    anchor="left"
                    // classes={{ paper: styles.mobile_drawer }}
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                >
                    {content}
                </Drawer>
            </Box>
            <Box className={styles.desktopSideBar}>
                <DrawerSideBar
                    classes={{paper: styles.desktop_drawerSideBar}}
                    variant="permanent"
                    open={open}
                >
                    <DrawerHeader>
                        <Button
                            fullWidth
                            onClick={handleDrawer}
                            className={styles.drawerSideBarButton + (!open ? ` ${styles.active}` : '')}
                        >
                            {open ? (
                                <ArrowLeftIcon fontSize={'medium'}/>
                            ) : (
                                <ArrowRightIcon fontSize={'medium'}/>
                            )}
                            {open ? <span className={styles.drawerTitleBtn}>Hide side panel</span> : null}
                        </Button>
                    </DrawerHeader>
                    {/*{open ? content : null}*/}
                    {content}
                </DrawerSideBar>
            </Box>
        </>
    );
};

export default NavBar;
