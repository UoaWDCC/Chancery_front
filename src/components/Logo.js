import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LogoIcon from '../icons/Chancery_logo_white.png';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    logo: {
        height: 60,
        width: 60,
        borderRadius: 7,
        backgroundColor: "#21CE99",
    },
    logoDiv: {
        backgroundColor: theme.palette.type === 'dark' ? "#313131": "#21CE99",
        width: 220,
        height: 60,
        borderRadius: 7,
        marginTop: 10,
        marginLeft: 10,
        color: theme.palette.type === 'dark' ? "#21CE99": "#FFFFFF",
    },
    logoText: {
        textTransform: "uppercase",
        fontSize: 24,
        paddingLeft: 10,
        paddingRight: 10,
    }
}));

function Logo() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.logoDiv}
        >
            <Grid item>
                <img src={LogoIcon} className={classes.logo} alt="Logo"/>
            </Grid>
            <Grid item>
                <Typography className={classes.logoText}>
                    Chancery
                </Typography>
            </Grid>

        </Grid>
    );
}

export default Logo;
