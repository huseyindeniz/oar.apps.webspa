import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ViewListIcon from '@material-ui/icons/ViewList';
import InfoIcon from '@material-ui/icons/Info';
import PolicyIcon from '@material-ui/icons/Policy';
import MailIcon from '@material-ui/icons/Mail';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
  fullList: {
    width: 'auto',
  },
});

export interface MenuProps {
  isOpen: boolean;
  onClickHandler: Function;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClickHandler }): JSX.Element => {

  const classes = useStyles();

  const list = (
    <div className={clsx(classes.list)}
    role="presentation"
    onClick={() => onClickHandler(false)}
    onKeyDown={() => onClickHandler(false)}
    >
      <List>
        <ListItem component={NavLink} to="/" exact button key='home' onClick={() => onClickHandler(false)}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>    
        <ListItem component={NavLink} to="/search" exact button key='search' onClick={() => onClickHandler(false)}>
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary='Search' />
        </ListItem>         
        <ListItem component={NavLink} to="/browse" exact button key='browse' onClick={() => onClickHandler(false)}>
          <ListItemIcon><ViewListIcon /></ListItemIcon>
          <ListItemText primary='Browse' />
        </ListItem>

        <Divider />
        <ListItem component={NavLink} to="/about" exact button key='about' onClick={() => onClickHandler(false)}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>   
        <ListItem component={NavLink} to="/policy" exact button key='policy' onClick={() => onClickHandler(false)}>
          <ListItemIcon><PolicyIcon /></ListItemIcon>
          <ListItemText primary='Policy' />
        </ListItem>   
        <ListItem component={NavLink} to="/contact" button key='contact' onClick={() => onClickHandler(false)}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>
      </List>
    </div >
  );

  return (
    <Drawer key="1" open={isOpen} onClose={() =>onClickHandler(false)}>
      {list}
    </Drawer>
  );
}

export default Menu;