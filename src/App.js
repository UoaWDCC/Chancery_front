import React, {Fragment, useState} from 'react';
import './App.css';
import {createMuiTheme, makeStyles, withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from "@material-ui/core/Grid";
import { Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Home from './pages/home';
import Revise from "./pages/revise";
import Saved from "./pages/saved";
import AccountMenu from "./components/AccountMenu";
import Paper from "@material-ui/core/Paper";
import {ThemeProvider} from "@material-ui/styles";
import Logo from "./components/Logo";

const StyledTabs = withStyles((theme) => ({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 85,
            width: '100%',
            backgroundColor: theme.palette.primary.contrastText,
        },
        height: '4px',
    },
    root: {
        float: 'right',
        paddingTop: '15px',
        paddingRight: '20px',
    }
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '25px',
        color: theme.color,
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

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
        width: 60,
        marginTop: 10,
        marginLeft: 10,
    },
}));

function App() {
    const classes = useStyles();
    const allTabs = ['/', '/revise', '/saved'];
    const [anchorEl, setAnchorEl] = useState(null);
    const [darkMode, setDarkMode] = useState(false);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
            primary: {
                light: '#21CE99',
                main: '#21ce99',
                dark: '#21CE99',
                contrastText: darkMode ? '#fff' : '#000000'
            },
            secondary: {
                main: '#000000',
                light: '#F5F5F5',
                dark: '#5F5F5F',
            },
            background: {
                paper: darkMode ? '#313131' : '#fff',
                default: darkMode ? '#5F5F5F' : '#F5F5F5',
            },
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={0} square>
                <BrowserRouter>
                    <div className={classes.root}>
                        <Route
                            path="/"
                            render={({ location }) => (
                                <Fragment>
                                    <Grid container style={{ minHeight: '10vh' }}>
                                        <Grid item xs>
                                            <Logo/>
                                        </Grid>
                                        <Grid item xs>
                                            <div className={classes.nav}>
                                                <StyledTabs value={location.pathname} aria-label="styled tabs example">
                                                    <StyledTab label="Home" value="/" component={Link} to={allTabs[0]} />
                                                    <StyledTab label="Revise" value="/revise" component={Link} to={allTabs[1]} />
                                                    <StyledTab label="Saved" value="/saved" component={Link} to={allTabs[2]} />
                                                    <StyledTab label="My Account" onClick={handleClick} />
                                                    <AccountMenu anchorEl={anchorEl} onClose={handleClose} setDarkMode={setDarkMode} darkMode={darkMode}/>
                                                </StyledTabs>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Switch>
                                        <Route path={allTabs[1]} render={() => <Revise/>} />
                                        <Route path={allTabs[2]} render={() => <Saved/>} />
                                        <Route path={allTabs[0]} render={() => <Home/>} />
                                    </Switch>
                                </Fragment>
                            )}
                        />
                    </div>
                </BrowserRouter>
            </Paper>
        </ThemeProvider>
    );
}

export default App;
