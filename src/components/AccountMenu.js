import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import { Link } from "react-router-dom";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

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

const StyledListItem = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
}))(ListItemText);

function AccountMenu(props) {
  const darkMode = props.darkMode;
  const anchorEl = props.anchorEl;

  let history = useHistory();

  const logout = async () => {
    try {
      props.onClose();
      await Auth.signOut();
      props.updateAuthState("loggedOut");
      history.push("/");
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
        <StyledListItem primary={darkMode ? "Light Mode" : "Dark Mode"} />
      </StyledMenuItem>
      <Link to={"/settings"} style={{ textDecoration: "none" }}>
        <StyledMenuItem onClick={() => props.onClose()}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <StyledListItem primary="Settings" />
        </StyledMenuItem>
      </Link>
      <StyledMenuItem onClick={logout}>
        <ListItemIcon>
          <ExitToAppIcon fontSize="small" />
        </ListItemIcon>
        <StyledListItem primary="Logout" />
      </StyledMenuItem>
    </StyledMenu>
  );
}

export default AccountMenu;
