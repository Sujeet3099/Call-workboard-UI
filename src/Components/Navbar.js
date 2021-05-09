// import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  Divider,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import './navbar.css';
import logo from '../logo.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__top">
          <IconButton onClick={handleDrawerOpen} style={{ color: '#fff' }}>
            <MenuIcon style={{ fontSize: '2.75rem' }} />
            <Divider style={{ color: '#fff' }} />
          </IconButton>
        </div>
        <div className="navbar__bottom">
          <img src={logo} alt="" className="navbar__user__img" />
        </div>
      </div>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <div className="navbar navbar__open">
          <div>
            <div className="navbar__top">
              <IconButton onClick={handleDrawerOpen} style={{ color: '#fff' }}>
                <MenuIcon style={{ fontSize: '2.75rem' }} />
                <Typography style={{ paddingLeft: '1.25rem', fontSize: '2rem' }}>MENU</Typography>
                <Divider style={{ color: '#fff' }} />
              </IconButton>
            </div>
            <List>
              <ListItem onClick={handleDrawerClose}>
                <ListItemIcon>
                  <ArrowBackIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText>
                  <span style={{ paddingLeft: '1rem' }}>Switch Back to Enterprise UI</span>
                </ListItemText>
              </ListItem>
            </List>
            {/* <div className="navbar__mid" onClick={handleDrawerClose} aria-hidden="true">
              <ArrowBackIcon />
              <span style={{ paddingLeft: '1rem' }}>Switch Back to Enterprise UI</span>
            </div> */}
          </div>
          <div className="navbar__bottom">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img src={logo} alt="" className="navbar__user__img" />
              <span style={{ fontSize: '1.25rem' }}>User Name</span>
            </div>
            <button className="navbar__btn" type="button">
              Logout
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
