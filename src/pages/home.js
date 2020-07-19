import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles( theme => ({
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingBottom: '25px',
        paddingTop: '25px'
    },
    subheading: {
        fontSize: '35px',
        fontWeight: 'bold',
        paddingBottom: '60px',
        textAlign: "center",
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
}))

function Home() {
    const classes = useStyles();

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
            <Grid className={"welcome-container"} item container direction="column" alignItems="center">
                <div className={"welcome-logo"}> logo </div>
                <Typography className={classes.title} variant={"h1"} color={"primary"}>
                    Chancery
                </Typography>
                <Typography className={classes.subheading} variant={"h2"}>
                    Prepare for your next investment banking interview
                </Typography>
                <Link to={"/revise"} style={{textDecoration: "none"}}>
                    <Button variant={"outlined"} className={classes.button} color={"primary"}>Start Revising</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Home;