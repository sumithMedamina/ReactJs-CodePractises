import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    backgroundColor: '#1a1a1a',
  },
  listItem: {
    color: '#fff',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
}));

const AdminPanel = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <List>
        <ListItem button className={classes.listItem}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminPanel;