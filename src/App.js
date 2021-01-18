import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import {createMuiTheme, makeStyles, withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Home from './pages/home';
import Revise from "./pages/revise";
import Saved from "./pages/saved";
import AccountMenu from "./components/AccountMenu";
import Paper from "@material-ui/core/Paper";
import {ThemeProvider} from "@material-ui/styles";
import Logo from "./components/Logo";
import { useDispatch } from 'react-redux';
import { fetchQuestions } from './redux/actions';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: '10px',
    },
    nav: {
        backgroundColor: '#FFFFFF',
        width: '100%'
    },
    logo: {
        height: 60,
        width: 60
    },
}));

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '1.6vw',
        color: theme.color,
        marginRight: theme.spacing(1),
        
        '&:focus': {
            opacity: 1,
        },
        '&:hover': {
            textDecoration: 'none',
        }
    },
}))((props) => <Tab disableRipple {...props} />);

function App() {
    const classes = useStyles();
    const allTabs = ['/', '/revise', '/saved'];
    const [anchorEl, setAnchorEl] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
            primary: {
                light: '#21CE99',
                main: '#21ce99',
                dark: '#21CE99',
                contrastText: darkMode ? '#FFFFFF' : '#000000'
            },
            secondary: {
                main: '#000000',
                light: '#F5F5F5',
                dark: '#5F5F5F',
            },
            background: {
                paper: darkMode ? '#313131' : '#FFFFFF',
                default: darkMode ? '#5F5F5F' : '#F5F5F5',
            },
        },
    })

    const isHome = () => {
        return window.location.pathname === "/" ? "transparent" : theme.palette.background.paper
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchQuestions());
    }, []);

    window.onkeydown = function (e) {
        if (document.URL.includes("revise")) {
            return !(e.keyCode === 32);
        }
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
                                        
                                        {
                                            // This block is navbar at the top of the page
                                        }
                                        <nav class="navbar navbar-expand-lg navbar-light" style={{boxShadow: 'none', paddingTop: '10', backgroundColor: isHome()}}>
                                            <a class="navbar-brand" href="#" style={{marginTop: '10px', marginLeft: '10px'}}><Logo/></a>
                                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <div class="collapse navbar-collapse" id="navbarNav">
                                                <ul class="navbar-nav ml-auto" style={{display: 'flex', alignItems: 'center'}}>
                                                    <li class="nav-item active">
                                                        <StyledTab label="Home" value="/" component={Link} to={allTabs[0]} />
                                                    </li>
                                                    <li class="nav-item">
                                                        <StyledTab label="Revise" value="/revise" component={Link} to={allTabs[1]} />
                                                    </li>
                                                    <li class="nav-item">
                                                        <StyledTab label="Saved" value="/saved" component={Link} to={allTabs[2]}/>
                                                    </li>
                                                    <li class="nav-item">
                                                        <StyledTab label="My Account" onClick={handleClick} style={{paddingLeft: 25}} />
                                                    </li>
                                                    <li class="nav-item">
                                                    <AccountMenu anchorEl={anchorEl} onClose={handleClose} setDarkMode={setDarkMode} darkMode={darkMode}/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>

                                        <div>
                                            <Switch>
                                                <Route path={allTabs[1]} render={() => <Revise/>} />
                                                <Route path={allTabs[2]} render={() => <Saved/>} />
                                                <Route path={allTabs[0]} render={() => <Home/>} />
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
