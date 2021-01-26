import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./Sidebar.css";
import AccountMenu from "../components/AccountMenu";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Sidebar(props) {
  const { darkMode, setDarkMode, handleClick, handleClose, anchorEl } = props;
  return (
    <Menu {...props}>
      <Link className="menu-item" to="/">
        <Button style={{ width: "100%", textAlign: "left", outline: "none" }}>
          Home
        </Button>
      </Link>

      <Link className="menu-item" to="/revise">
        <Button style={{ width: "100%" }}>Revise</Button>
      </Link>

      <Link className="menu-item" to="/saved">
        <Button style={{ width: "100%" }}>Saved</Button>
      </Link>

      <Button
        style={{ width: "100%", textAlign: "center" }}
        className="menu-item"
        onClick={handleClick}
      >
        My Account
      </Button>

      <AccountMenu
        anchorEl={anchorEl}
        onClose={handleClose}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
    </Menu>
  );
}

export default Sidebar;
