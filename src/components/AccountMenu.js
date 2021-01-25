import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

const StyledMenu = withStyles((theme) => ({
  paper: {
    borderRadius: 0,
    boxShadow: theme.palette.type === "dark" ? "none" : "0 0 5px 0 grey",
    backgroundColor: theme.palette.type === "dark" ? "#000000" : "#FFFFFF",
  },
}))((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function AccountMenu(props) {
  const darkMode = props.darkMode;
  const anchorEl = props.anchorEl;

  const logout = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      await Auth.signOut();
      console.log("logged out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      disableAutoFocusItem
      open={Boolean(anchorEl)}
      onClose={props.onClose}
    >
      <StyledMenuItem onClick={() => props.setDarkMode(!darkMode)}>
        <ListItemIcon>
          {darkMode ? (
            <ToggleOnIcon fontSize="small" />
          ) : (
            <ToggleOffIcon fontSize="small" />
          )}
        </ListItemIcon>
        <ListItemText primary="Dark Mode" />
      </StyledMenuItem>
      <StyledMenuItem>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </StyledMenuItem>
      <StyledMenuItem onClick={logout}>
        <ListItemIcon>
          <ExitToAppIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </StyledMenuItem>
    </StyledMenu>
  );
}

export default AccountMenu;
