import {withStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';

const StyledMenu = withStyles({
    paper: {
        borderRadius: 0,
        boxShadow: '0 0 5px 0 grey',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

function AccountMenu(props) {

    const darkMode = props.darkMode;
    const anchorEl=props.anchorEl;

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
                    <ToggleOffIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Dark mode" />
            </StyledMenuItem>
            <StyledMenuItem>
                <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </StyledMenuItem>
            <StyledMenuItem>
                <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </StyledMenuItem>
        </StyledMenu>
    )
}

export default AccountMenu;