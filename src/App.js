import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import {
  createMuiTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Revise from "./pages/revise";
import Saved from "./pages/saved";
import Settings from "./pages/settings";
import AccountMenu from "./components/AccountMenu";
import SignUp from "./pages/signup";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/styles";
import Logo from "./components/Logo";
import { useDispatch } from "react-redux";
import { fetchQuestions } from "./redux/actions";
import Login from "./pages/login";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Password from "./pages/password";
import { Hub } from "aws-amplify";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./components/Sidebar";
import clsx from "clsx";
Amplify.configure(awsconfig);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: "10px",
  },
  nav: {
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  logo: {
    height: 60,
    width: 60,
    marginTop: 10,
    marginLeft: 10,
  },
  hide: {
    display: "none",
  },
  sideBar: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 85,
      width: "100%",
      backgroundColor: theme.palette.primary.contrastText,
    },
    height: "4px",
  },
  root: {
    float: "right",
    paddingRight: "20px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "20px",
    color: theme.color,
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
    "&:hover": {
      textDecoration: "none",
      color: "inherit",
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function App() {
  const classes = useStyles();
  const allTabs = [
    "/",
    "/revise",
    "/saved",
    "/signup",
    "/login",
    "/password",
    "/settings",
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(null);
  const [isUserLoggedIn, setUserLoggedIn] = useState("initializing");
  const [open, setOpen] = React.useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        light: "#21CE99",
        main: "#21ce99",
        dark: "#21CE99",
        contrastText: darkMode ? "#FFFFFF" : "#000000",
      },
      secondary: {
        main: "#000000",
        light: "#F5F5F5",
        dark: "#5F5F5F",
      },
      background: {
        paper: darkMode ? "#313131" : "#FFFFFF",
        default: darkMode ? "#5F5F5F" : "#F5F5F5",
      },
    },
    boxShadow:
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  });

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          getUser().then((userData) => setUser(userData));
          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
          console.log("Sign in failure", data);
          break;
        default:
          break;
      }
    });
  }, []);

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      setUserLoggedIn("loggedIn");
    } catch (err) {
      setUserLoggedIn("loggedOut");
    }
  }

  const updateAuthState = (status) => {
    setUserLoggedIn(status);
  };

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log("Not signed in"));
  }

  const isHome = (pathname) => {
    return pathname === "/" || pathname === "/login" || pathname === "/signup"
      ? "transparent"
      : theme.palette.background.paper;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  window.onkeydown = function (e) {
    if (document.URL.includes("revise")) {
      return e.keyCode !== 32;
    }
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Paper elevation={0} square>
          <BrowserRouter>
            <div className={classes.root}>
              <Sidebar
                animation="bubble"
                right
                StyleTabs={StyledTabs}
                StyleTab={StyledTab}
                setDarkMode={handleDarkMode}
                anchorEl={anchorEl}
                open={open}
                darkMode={darkMode}
                handleDrawerClose={handleDrawerClose}
                updateAuthState={updateAuthState}
              />
              <Route
                path="/"
                render={({ location }) => (
                  <Fragment>
                    <AppBar
                      position={"fixed"}
                      style={{
                        boxShadow: "none",
                        paddingTop: 10,
                        backgroundColor: isHome(location.pathname),
                        justifyContent: "center",
                        height: "100px",
                        zIndex: 1,
                      }}
                    >
                      <Toolbar>
                        <Logo />
                        {isUserLoggedIn !== "loggedOut" && (
                          <div
                            className={classes.nav}
                            style={{
                              backgroundColor: isHome(location.pathname),
                            }}
                          >
                            <IconButton
                              style={{
                                float: "right",
                              }}
                              color="inherit"
                              aria-label="open drawer"
                              edge="end"
                              onClick={handleDrawerOpen}
                              className={clsx(
                                open ? classes.hide : classes.sideBar
                              )}
                            >
                              <MenuIcon />
                            </IconButton>
                            <StyledTabs
                              value={location.pathname}
                              aria-label="styled tabs example"
                            >
                              <StyledTab
                                label="Home"
                                value={allTabs[0]}
                                component={Link}
                                to={allTabs[0]}
                              />
                              <StyledTab
                                label="Revise"
                                value={allTabs[1]}
                                component={Link}
                                to={allTabs[1]}
                              />
                              <StyledTab
                                label="Saved"
                                value={allTabs[2]}
                                component={Link}
                                to={allTabs[2]}
                              />
                              <StyledTab
                                label="My Account"
                                value={allTabs[6]}
                                onClick={handleClick}
                                style={{ paddingLeft: 25 }}
                              />
                              <AccountMenu
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                                updateAuthState={updateAuthState}
                              />
                            </StyledTabs>
                          </div>
                        )}
                      </Toolbar>
                    </AppBar>
                    <div>
                      <Switch>
                        <Route
                          path={allTabs[5]}
                          render={() => (
                            <Password isUserLoggedIn={isUserLoggedIn} />
                          )}
                        />
                        <Route
                          path={allTabs[4]}
                          component={() => (
                            <Login
                              updateAuthState={updateAuthState}
                              isUserLoggedIn={isUserLoggedIn}
                            />
                          )}
                        />
                        <Route
                          path={allTabs[3]}
                          render={() => (
                            <SignUp isUserLoggedIn={isUserLoggedIn} />
                          )}
                        />
                        <Route
                          path={allTabs[1]}
                          render={() => (
                            <Revise isUserLoggedIn={isUserLoggedIn} />
                          )}
                        />
                        <Route
                          path={allTabs[2]}
                          render={() => (
                            <Saved isUserLoggedIn={isUserLoggedIn} />
                          )}
                        />
                        <Route
                          path={allTabs[6]}
                          render={() => (
                            <Settings isUserLoggedIn={isUserLoggedIn} />
                          )}
                        />
                        <Route
                          exact
                          path={allTabs[0]}
                          render={() => (
                            <Home
                              name={user && user.attributes.email}
                              isUserLoggedIn={isUserLoggedIn}
                            />
                          )}
                        />
                        <Route
                          render={() => <Redirect to={{ pathname: "/" }} />}
                        />
                      </Switch>
                    </div>
                  </Fragment>
                )}
              />
            </div>
          </BrowserRouter>
        </Paper>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
