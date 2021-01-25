import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import {
  createMuiTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Revise from "./pages/revise";
import Saved from "./pages/saved";
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

const useStyles = makeStyles(() => ({
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
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "25px",
    color: theme.color,
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function App() {
  const classes = useStyles();
  const allTabs = ["/", "/revise", "/saved", "/signup", "/login", "/password"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

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
  });

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
  });

  window.onkeydown = function (e) {
    if (document.URL.includes("revise")) {
      return !(e.keyCode === 32);
    }
  };

  const getPathValue = (pathname) => {
    return pathname === "/login" || pathname === "/signup" || pathname === "/";
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Paper elevation={0} square>
          <BrowserRouter>
            <div className={classes.root}>
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
                      }}
                    >
                      <Toolbar>
                        <Logo />
                        {!getPathValue(location.pathname) && (
                          <div
                            className={classes.nav}
                            style={{
                              backgroundColor: isHome(location.pathname),
                            }}
                          >
                            <StyledTabs
                              value={location.pathname}
                              aria-label="styled tabs example"
                            >
                              <StyledTab
                                label="Home"
                                value="/"
                                component={Link}
                                to={allTabs[0]}
                              />
                              <StyledTab
                                label="Revise"
                                value="/revise"
                                component={Link}
                                to={allTabs[1]}
                              />
                              <StyledTab
                                label="Saved"
                                value="/saved"
                                component={Link}
                                to={allTabs[2]}
                              />
                              <StyledTab
                                label="My Account"
                                onClick={handleClick}
                                style={{ paddingLeft: 25 }}
                              />
                              <AccountMenu
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                              />
                            </StyledTabs>
                          </div>
                        )}
                      </Toolbar>
                    </AppBar>
                    <div>
                      <Switch>
                        <Route path={allTabs[5]} render={() => <Password />} />
                        <Route path={allTabs[4]} component={() => <Login />} />
                        <Route path={allTabs[3]} render={() => <SignUp />} />
                        <Route path={allTabs[1]} render={() => <Revise />} />
                        <Route path={allTabs[2]} render={() => <Saved />} />
                        <Route path={allTabs[0]} render={() => <Home />} />
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
