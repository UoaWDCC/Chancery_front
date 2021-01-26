import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./Sidebar.css";
import AccountMenu from "../components/AccountMenu";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const { darkMode, setDarkMode, handleClick, handleClose, anchorEl } = props;
  return (
    <Menu {...props}>
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/revise">
        Revise
      </Link>

      <Link className="menu-item" to="/saved">
        Saved
      </Link>

      <button
        className="menu-item"
        onClick={handleClick}
        style={{
          fontSize: "23px",
          background: "transparent",
          border: "none",
          textAlign: "left",
        }}
      >
        My Account
      </button>

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
