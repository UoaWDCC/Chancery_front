import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./Sidebar.css";
import AccountMenu from "../components/AccountMenu";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Revise from "../pages/revise";
import Saved from "../pages/saved";

function Sidebar(props) {
  const { darkMode, setDarkMode, handleClick, handleClose, anchorEl } = props;
  return (
    <BrowserRouter>
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

      <Switch>
        <Route path={"/revise"} render={() => <Revise />} />
        <Route path={"/saved"} render={() => <Saved />} />
        <Route path={"/"} render={() => <Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Sidebar;
