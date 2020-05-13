import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            zIndex: 990
        },
        menuButton: {
            marginRight: theme.spacing(2),
            border: '1px solid #bbb',
        },
        title: {
            flexGrow: 1
        }
    }),
);

const Header: React.FC = (): JSX.Element => {

    const classes = useStyles();

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleDrawer = (isOpen: boolean) => {
        setIsMenuOpen(isOpen);
    };

    return (
        <AppBar position="sticky" className={classes.root}>
            <Toolbar>
                <IconButton onClick={() => toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>OpenAccess on Containers</Typography>
            </Toolbar>
            <Menu isOpen={isMenuOpen} onClickHandler={toggleDrawer} />
        </AppBar>
    );
};

export default Header;