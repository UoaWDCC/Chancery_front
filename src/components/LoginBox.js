import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Logo from "../icons/Chancery_logo.png"
import ParticleComponent from "../components/ParticleComponent";
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles( theme => ({
    heading: {
        fontSize: '24px',
        position: "relative",
        color: theme.palette.primary.contrastText,
    },
    button: {
        textTransform: 'none',
        fontSize: '20px',
        "&:hover": {
            background: 'transparent',
        }
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
    },
    loginButton: {
        borderRadius: "10px",
        color: "white",
        fontSize: "24px",
        textAlign: "center",
        textTransform: "uppercase",
        padding: "10px 0px 10px 0px",
        boxShadow: "none",
        margin: '40px 0 30px 0',
    
        width: "100%",
        height: '80px',
    
        "&:hover": {
          borderWidth: "3px",
          backgroundColor: "#ffffff",
          color: "#21CE99",
          boxShadow: "none",
        },
      },
}))

function StyledCheckbox(props) {
    const classes = useStyles();
    return (
        <Checkbox
            className={classes.root}
            disableRipple
            color="primary"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            inputProps={{ 'aria-label': 'decorative checkbox' }}
            {...props}
        />
    );
}

function LoginBox(props) {

    const classes = useStyles();

    const darkMode = props.darkMode;
    const anchorEl=props.anchorEl;

    return (
        <Grid className={"welcome-container"} item container direction="column" alignItems="center" style={{paddingBottom: '10vh'}}>
            <img src={Logo} className={classes.logo} alt="Logo" />
            <Grid item container xs={12} className={classes.background}>

                <Grid item xs={12}>
                    <Typography className={classes.heading} >
                        Email
                    </Typography>

                    <TextField type={"email"} inputProps={{style: {fontSize: 24}}} className={classes.textbox}/>
                
                </Grid>

                <Grid item xs={12} >
                    <Typography className={classes.heading} >
                        Password
                    </Typography>

                    <TextField type={"password"} inputProps={{style: {fontSize: 24}}} className={classes.textbox}/>
                
                </Grid>

                <Grid item container xs={12}>
                    <Grid item xs={6} >

                   
                    
                    </Grid>
                    <Grid item container xs={6} justify="flex-end">
                        <Button className={classes.button}>Forgot password?</Button>
                    
                    </Grid>
                </Grid>

                <Grid item xs={12} >

                    <Button
                    className={classes.loginButton}
                    color="primary"
                    variant={"contained"}
                    >
                    Login
                    </Button>
                
                </Grid>

                <Grid item container xs={12} justify="center">
                    <Typography style={{display: 'inline-block', fontSize: '20px'}}>
                        Don't have an account yet?
                    </Typography>

                    <Button className={classes.button} color="primary" style={{textDecoration: 'underline', marginTop: '-8px'}}>Sign Up</Button>
                
                </Grid>

                
                  
            </Grid>
        </Grid>
    )
}

export default LoginBox;