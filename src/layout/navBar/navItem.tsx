import React, {ReactNode, useState} from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styles from './style.module.scss';
import {Link} from "react-router-dom";

interface NavItemProps {
    children?: ReactNode;
    className?: string;
    depth: number;
    href: any;
    icon?: any;
    info?: any;
    open?: boolean;
    title: string;
    isOpenNavBar: boolean;
}

const NavItem = (props: NavItemProps) => {
    const {
        children,
        className,
        depth,
        href,
        icon: Icon,
        info: Info,
        open: openProp,
        title,
        isOpenNavBar,
        ...rest
    } = props;

    const [open, setOpen] = useState<boolean>(!!openProp);

    const handleToggle = (): void => {
        setOpen((prevOpen) => !prevOpen);
    };

    let paddingLeft = 8;

    if (depth > 0) {
        paddingLeft = 32 + 8 * depth;
    }

    const style = {paddingLeft};

    if (children) {
        return (
            <ListItem className={`${styles.item} ${className}`} disableGutters key={title} {...rest}>
                <Button className={styles.button} onClick={handleToggle} style={style}>
                    {Icon && <Icon className={styles.icon} size="20"/>}
                    <span className={styles.title}>{title}</span>
                    {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                </Button>
                <Collapse in={open}>{children}</Collapse>
            </ListItem>
        );
    }
    return (
        <ListItem className={`${styles.itemLeaf} ${className}`} disableGutters key={title} {...rest}>
            <Link to={href || '/'}>
                {/*eslint-disable-next-line*/}
                <a className={`${styles.buttonLeaf} depth-${depth} ${open ? styles.buttonLeafActive : ''}`}>
                    <Button>
                        {Icon && <Icon className={styles.icon} style={{color: open ? '#3F8CFF' : "#7D8592"}} size="20"/>}
                        {isOpenNavBar ? <span style={{color: open ? '#3F8CFF' : "#7D8592"}} className={styles.title}> {title}</span> : null}
                        {Info && <Info/>}
                    </Button>
                </a>
            </Link>
        </ListItem>
    );
};

NavItem.defaultProps = {
    open: false,
};

export default NavItem;
