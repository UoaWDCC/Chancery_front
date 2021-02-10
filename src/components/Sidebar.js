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
import {
  Settings,
  ChevronLeft,
  ChevronRight,
  ImportContacts,
  BookmarkBorder,
  ExitToApp,
  Brightness3,
  Brightness5,
  Face,
  ExpandLess,
  ExpandMore,
} from "@material-ui/icons";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

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

  let history = useHistory();

  const logout = async () => {
    handleDrawerClose();

    try {
      await Auth.signOut();
      props.updateAuthState("loggedOut");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
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
            {theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />

        <Link
          to="/revise"
          style={{
            textDecoration: "none",
            color: darkMode ? "white" : "black",
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <ImportContacts />
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
              <BookmarkBorder />
            </ListItemIcon>
            <ListItemText primary="Saved" />
          </ListItem>
        </Link>

        <ListItem button onClick={handleExpand}>
          <ListItemIcon>
            <Face />
          </ListItemIcon>
          <ListItemText primary="My Account" />
          {expand ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>

      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={setDarkMode}>
            <ListItemIcon>
              {darkMode ? <Brightness5 /> : <Brightness3 />}
            </ListItemIcon>
            <ListItemText primary={darkMode ? "Light Mode" : "Dark Mode"} />
          </ListItem>

          <Link
            to="/settings"
            style={{
              textDecoration: "none",
              color: darkMode ? "white" : "black",
            }}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </Link>

          <ListItem button className={classes.nested} onClick={logout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Collapse>
    </Drawer>
  );
}

export default Sidebar;
