import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { MdHome, MdSearch, MdLibraryBooks, MdInfo, MdLock, MdEmail } from 'react-icons/md';
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
          <ListItemIcon><MdHome size={20} /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>    
        <ListItem component={NavLink} to="/search" exact button key='search' onClick={() => onClickHandler(false)}>
          <ListItemIcon><MdSearch size={20} /></ListItemIcon>
          <ListItemText primary='Search' />
        </ListItem>         
        <ListItem component={NavLink} to="/browse" exact button key='browse' onClick={() => onClickHandler(false)}>
          <ListItemIcon><MdLibraryBooks size={20} /></ListItemIcon>
          <ListItemText primary='Browse' />
        </ListItem>

        <Divider />
        <ListItem component={NavLink} to="/about" exact button key='about' onClick={() => onClickHandler(false)}>
          <ListItemIcon><MdInfo size={20} /></ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>   
        <ListItem component={NavLink} to="/policy" exact button key='policy' onClick={() => onClickHandler(false)}>
          <ListItemIcon><MdLock size={20} /></ListItemIcon>
          <ListItemText primary='Policy' />
        </ListItem>   
        <ListItem component={NavLink} to="/contact" button key='contact' onClick={() => onClickHandler(false)}>
          <ListItemIcon><MdEmail size={20} /></ListItemIcon>
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