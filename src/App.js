import React, {Fragment, useState, useEffect} from 'react';
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
import { useDispatch } from 'react-redux';
import { fetchQuestions } from './redux/actions';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import { useMediaQuery } from 'react-responsive'
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";

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
        paddingRight: '20px',
        paddingTop: '10px',
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
    menuButton: {
        position: "fixed",
        top: 0,
        left: 0,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

function App() {
    const classes = useStyles();
    const allTabs = ['/', '/revise', '/saved'];
    const [anchorEl, setAnchorEl] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [state, setState] = useState({left: false});
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchQuestions());
    });

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
                                        {isTabletOrMobile ?
                                            <Fragment key={'left'}>
                                                <IconButton className={classes.menuButton} onClick={toggleDrawer('left', true)}><MenuIcon/></IconButton>
                                                <Drawer className={classes.drawer} anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                                                    <div
                                                        className={classes.list}
                                                        onClick={toggleDrawer('left', false)}
                                                        onKeyDown={toggleDrawer('left', false)}
                                                    >
                                                        <List>
                                                            <ListItem button value="/" component={Link} to={allTabs[0]}>
                                                                <ListItemIcon><HomeIcon color={"primary"}/></ListItemIcon>
                                                                <ListItemText primary={'Home'}/>
                                                            </ListItem>
                                                            <ListItem button value="/revise" component={Link} to={allTabs[1]}>
                                                                <ListItemIcon><BookIcon color={"primary"}/></ListItemIcon>
                                                                <ListItemText primary={'Revise'} />
                                                            </ListItem>
                                                            <ListItem button value="/saved" component={Link} to={allTabs[2]}>
                                                                <ListItemIcon><BookmarksIcon color={"primary"}/></ListItemIcon>
                                                                <ListItemText primary={'Saved'} />
                                                            </ListItem>
                                                            <ListItem button onClick={() => setDarkMode(!darkMode)}>
                                                                <ListItemIcon>{darkMode ? <ToggleOnIcon color={"primary"} fontSize="small" /> : <ToggleOffIcon color={"primary"} fontSize="small" />}</ListItemIcon>
                                                                {darkMode ? <ListItemText primary="Light Mode" /> : <ListItemText primary="Dark Mode" />}
                                                            </ListItem>
                                                        </List>
                                                    </div>
                                                </Drawer>
                                            </Fragment> :
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
                                            </Grid>}
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
        </React.StrictMode>
    );
}

export default App;
