import React from 'react';
//@ts-ignore
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PublicIcon from '@mui/icons-material/Public';
import styles from './style.module.scss';
import DevicesIcon from '@mui/icons-material/Devices';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupsIcon from '@mui/icons-material/Groups';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';


import {Button, Drawer} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {DrawerHeader, DrawerSideBar} from './components/DrawerSideBar';


interface NavBarProps {
    onMobileClose: () => void;
    openMobile: boolean;
}


const NavBar = (props: NavBarProps) => {
    const {onMobileClose, openMobile} = props;
    const [open, setOpen] = React.useState(false);

    const handleLogout = async (): Promise<void> => {
    };


    const sections = [
        {
            subheader: '',
            items: [
                {
                    title: 'Customers',
                    icon: GroupsIcon,
                    // href: ADMIN_PATH.CUSTOMERS,
                    // permission: hasPermission([PERMISSIONS.CUSTOMER_READ]),
                },
                {
                    title: 'Organizations',
                    icon: HomeWorkIcon,
                    // href: ADMIN_PATH.ORGANIZATION_PAGE,
                    // permission: hasPermission([PERMISSIONS.ORGANIZATION_READ]),
                },
                {
                    title: 'Locations',
                    icon: PublicIcon,
                    // href: ADMIN_PATH.LOCATION_PAGE,
                    // permission: hasPermission([PERMISSIONS.LOCATION_READ]),
                },
                {
                    title: 'Users',
                    icon: GroupIcon,
                    // href: `${ADMIN_PATH.USERS}?tab=${defaultUserTab}`,
                    // permission: hasPermission([PERMISSIONS.APP_USER_READ, PERMISSIONS.PORTAL_USER_READ]),
                },
                {
                    title: 'User Associations',
                    icon: PersonIcon,
                    // href: `${ADMIN_PATH.USER_ASSOCIATION}?tab=${defaultUserTab}`,
                    // permission: hasPermission([PERMISSIONS.APP_USER_READ, PERMISSIONS.PORTAL_USER_READ]),
                },
                {
                    title: 'Peer Support',
                    icon: VolunteerActivismIcon,
                    // href: ADMIN_PATH.PEER_SUPPORT,
                    // permission: hasPermission([PERMISSIONS.PEER_SUPPORT_PAGE_READ]),
                },
                {
                    title: 'Devices',
                    icon: DevicesIcon,
                    // href: ADMIN_PATH.DEVICES,
                    // permission: hasPermission([PERMISSIONS.DEVICE_READ]),
                },
                {
                    title: 'Consents',
                    icon: FileCopyIcon,
                    // href: ADMIN_PATH.CONSENTS,
                    // permission: hasPermission([PERMISSIONS.RESOURCE_CONSENT_READ]),
                },
                {
                    title: 'EULAs',
                    icon: FactCheckIcon,
                    // href: ADMIN_PATH.EULA,
                    // permission: hasPermission([PERMISSIONS.RESOURCE_EULA_READ]),
                },
                {
                    title: 'Clinical Portal',
                    icon: AssignmentIndIcon,
                    // href: ADMIN_PATH.CLINICAL_PORTAL,
                    permission: true,
                },
                {
                    title: 'Documents',
                    icon: PictureAsPdfIcon,
                    // href: ADMIN_PATH.DOCUMENTS,
                    // permission: hasPermission([PERMISSIONS.RESOURCE_DOCUMENT_READ]),
                },
                {
                    title: 'Notifications',
                    icon: NotificationsIcon,
                    // href: ADMIN_PATH.NOTIFICATIONS,
                    // permission: hasPermission([PERMISSIONS.SURVEY_READ]),
                },
            ],
        },
    ];

    const handleDrawer = () => {
        setOpen(!open);
        // localStorage.setItem('isOpenDrawer', `${!open}`);
    };
    // useEffect(() => {
    //   if (openMobile && onMobileClose) {
    //     onMobileClose();
    //   }
    // }, []);
    //
    // useLayoutEffect(() => {
    //   const isOpenDrawer = localStorage.getItem('isOpenDrawer');
    //   const parsedValue = isOpenDrawer && JSON.parse(isOpenDrawer);
    //   setOpen(parsedValue ?? true);
    // }, []);

    const content = (
        <Box
            height="100%"
            className={styles.navigation}
            display="flex"
            flexDirection="column"
            // style={{ marginTop: open ? 'auto' : '128px' }}
        >
            <div style={{paddingRight:open?20:0}} className={styles.profile_content}>
                {/*<div className={styles.scroll}>*/}


                <Box p={2} className={styles.nav_profile} style={{backgroundColor:open ? `rgba(125, 133, 146, 0.23)` : undefined}}>
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
                    {/*<span>Logout</span>*/}
                </Box>

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
                            {/*{renderNavItems({*/}
                            {/*  items: section.items,*/}
                            {/*  isOpenNavBar: open,*/}
                            {/*})}*/}
                        </List>
                    ))}
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
