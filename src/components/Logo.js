import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LogoIcon from '../icons/Chancery_logo.png';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    logo: {
        height: 60,
        width: 60,
        borderRadius: 7,
    },
    logoDiv: {
        height: 60,
        borderRadius: 7,
        marginTop: 10,
        marginLeft: 10,
    },
    logoText: {
        textTransform: "uppercase",
        fontSize: 35,
        padding: '0px 10px 8px 10px',
        fontWeight: 'bold',
    }
});

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
                <Typography className={classes.logoText} color={'primary'}>
                    Chancery
                </Typography>
            </Grid>

        </Grid>
    );
}

export default Logo;
