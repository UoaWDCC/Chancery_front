import React, {Fragment} from 'react';
import './App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from "@material-ui/core/Grid";
import { Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Home from './pages/home';
import Revise from "./pages/revise";
import Saved from "./pages/saved";

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 70,
            width: '100%',
            backgroundColor: '#000000',
        },
        height: '3px',
    },
    root: {
        float: 'right',
        paddingTop: '15px',
        paddingRight: '20px',
    }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#000000',
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
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
}));

function App() {
    const classes = useStyles();
    const allTabs = ['/', '/revise', '/saved'];

    return (
        <BrowserRouter>
        <div className={classes.root}>
            <Route
                path="/"
                render={({ location }) => (
                    <Fragment>
                        <Grid container style={{ minHeight: '10vh' }}>
                            <Grid item xs>
                                <div className={"logo"}> Chancery </div>
                            </Grid>
                            <Grid item xs>
                                <div className={classes.nav}>
                                    <StyledTabs value={location.pathname} aria-label="styled tabs example">
                                        <StyledTab label="Home" value="/" component={Link} to={allTabs[0]} />
                                        <StyledTab label="Revise" value="/revise" component={Link} to={allTabs[1]} />
                                        <StyledTab label="Saved" value="/saved" component={Link} to={allTabs[2]} />
                                        <StyledTab label="My Account" />
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
    );
}

export default App;
