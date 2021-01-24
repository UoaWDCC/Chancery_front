import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./Sidebar.css";
import AccountMenu from "../components/AccountMenu";

function Sidebar(props) {
  const { darkMode, setDarkMode, handleClick, handleClose, anchorEl } = props;
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/revise">
        Revise
      </a>

      <a className="menu-item" href="/saved">
        Saved
      </a>

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
