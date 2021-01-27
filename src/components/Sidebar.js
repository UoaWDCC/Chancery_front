import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import FaceIcon from "@material-ui/icons/Face";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Sidebar(props) {
  const { setDarkMode, handleDrawerClose, darkMode } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List component="nav" className={classes.root}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: darkMode ? "white" : "black",
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link
          to="/revise"
          style={{
            textDecoration: "none",
            color: darkMode ? "white" : "black",
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Revise" />
          </ListItem>
        </Link>

        <Link
          to="/saved"
          style={{
            textDecoration: "none",
            color: darkMode ? "white" : "black",
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <BookmarkBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Saved" />
          </ListItem>
        </Link>

        <ListItem button onClick={handleExpand}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="My Account" />
          {expand ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>

      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={setDarkMode}>
            <ListItemIcon>
              <Brightness3Icon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Collapse>
    </Drawer>
  );
}

export default Sidebar;
