import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Tabs>
        <Tab label="Item one" />
        <Tab label="Item two" />
        <Tab label="CV" />
      </Tabs>
    </AppBar>
  );
};

export default Navigation;
