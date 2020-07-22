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
        padding: '25px 0 25px 0',
        position: "relative",
        color: theme.palette.primary.contrastText,
    },
    subheading: {
        fontSize: '35px',
        fontWeight: 'bold',
        paddingBottom: '60px',
        textAlign: "center",
        position: "relative",
    },
    button: {
        backgroundColor: theme.palette.type === "dark" ? '#000000' : '#fff',
        borderRadius: '7px',
        borderColor: '#21CE99',
        borderWidth: '3px',
        fontWeight: 'bold',
        fontSize: '25px',
        padding: '15px 35px 15px 35px',
        '&:hover': {
            borderWidth: '3px',
            backgroundColor: '#21CE99',
            color: '#ffffff',
        },
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
    }
}))

function LoginBox(props) {

    const classes = useStyles();

    const darkMode = props.darkMode;
    const anchorEl=props.anchorEl;

    return (
        <Grid
        className={"welcome-page"}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '90vh' }}
    >
        <ParticleComponent/>
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

                {/*<Link to={"/revise"} style={{textDecoration: "none"}}>
                    <Button variant={"outlined"} className={classes.button} color={"primary"}>Start Revising</Button>
    </Link>*/}
            </Grid>
        </Grid>
    </Grid>
    )
}

export default LoginBox;