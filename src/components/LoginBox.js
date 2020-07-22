import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Logo from "../icons/Chancery_logo.png"
import ParticleComponent from "../components/ParticleComponent";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles( theme => ({
    heading: {
        fontSize: '24px',
        position: "relative",
        color: theme.palette.primary.contrastText,
    },
    button: {
        textTransform: 'none',
        fontSize: '20px',
    },
    logo: {
        height: 200,
        width: 200,
    },
    background: {
        margin: '30px',
        width: '400px',
        zIndex: '1',
    },
    textbox: {
        width: '100%',
        padding: '20px 0 20px 0',
    }
}))

function LoginBox(props) {

    const classes = useStyles();

    const darkMode = props.darkMode;
    const anchorEl=props.anchorEl;

    return (
        <Grid className={"welcome-container"} item container direction="column" alignItems="center">
            <img src={Logo} className={classes.logo} alt="Logo" />
            <Grid item container xs={12} className={classes.background}>

                <Grid item xs={12}>
                    <Typography className={classes.heading} >
                        Email
                    </Typography>

                    <TextField inputProps={{style: {fontSize: 24}}} className={classes.textbox}/>
                
                </Grid>

                <Grid item xs={12} >
                    <Typography className={classes.heading} >
                        Password
                    </Typography>

                    <TextField inputProps={{style: {fontSize: 24}}} className={classes.textbox}/>
                
                </Grid>

                <Grid item container xs={12}>
                    <Grid item xs={6} >
                        <Typography>
                            1
                        </Typography>
                    
                    </Grid>
                    <Grid item container xs={6} justify="flex-end">
                        <Button className={classes.button}>Forgot password?</Button>
                    
                    </Grid>
                </Grid>

                {/*<Link to={"/revise"} style={{textDecoration: "none"}}>
                    <Button variant={"outlined"} className={classes.button} color={"primary"}>Start Revising</Button>
    </Link>*/}
            </Grid>
        </Grid>
    )
}

export default LoginBox;