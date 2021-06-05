import React from 'react';
import { AppBar, Hidden, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Hidden>
          <MenuIcon />
        </Hidden>
        <Typography variant="h4">Portfolio</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
