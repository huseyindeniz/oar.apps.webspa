import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MdMenu } from 'react-icons/md';
import { Button } from '@material-ui/core';
import { MdOpenInNew } from 'react-icons/md';

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
                    <MdMenu size={24} />
                </IconButton>
                <Typography variant="h6" className={classes.title}>OpenAccess on Containers</Typography>
                <Typography variant="body2">
                ENV: {process.env.REACT_APP_ENV_VAR}<br />
                API: <Button 
                        endIcon={<MdOpenInNew />}
                        target='_blank' 
                        href={'http://' + process.env.REACT_APP_API_HOST + ':' +process.env.REACT_APP_API_PORT + '/v1.0/ui' }>
                            {'http://' + process.env.REACT_APP_API_HOST + ':' +process.env.REACT_APP_API_PORT + '/v1.0/ui' }</Button>
                </Typography>
            </Toolbar>
            <Menu isOpen={isMenuOpen} onClickHandler={toggleDrawer} />
        </AppBar>
    );
};

export default Header;