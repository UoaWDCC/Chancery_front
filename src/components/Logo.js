import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import LogoIcon from '../icons/Chancery_logo_white.png';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: 60,
        width: 60,
        borderRadius: 7,
        backgroundColor: "#21CE99",
    },

    logoDiv: {
        backgroundColor: theme.palette.type === 'dark' ? "#313131": "#21CE99",
        width: 200,
        height: 60,
        borderRadius: 7,
        marginTop: 10,
        marginLeft: 10,
        color: theme.palette.type === 'dark' ? "#21CE99": "#FFFFFF",
    },
}));

function Logo() {
    const classes = useStyles();
    const theme = useTheme();
    const isDark = (theme.palette.type === 'dark');
    return (
        <div className={classes.logoDiv}>
            <img src={LogoIcon} className={classes.logo} alt="Logo"/>
            CHANCERY
        </div>
    );
}

export default Logo;
