import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
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
    },
    button: {
        borderRadius: '7px',
        borderColor: '#21CE99',
        borderWidth: '3px',
        fontWeight: 'bold',
        fontSize: '25px',
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingRight: '35px',
        paddingLeft: '35px',
        '&:hover': {
            borderWidth: '3px',
            backgroundColor: '#21CE99',
            color: '#ffffff',
        },
    }
})

function Home() {
    const classes = useStyles();

    return (
        <div className={"welcome-page"}>
            <div className={"welcome-logo"}> logo </div>
            <Typography className={classes.title} variant={"h1"} color={"primary"}>
                Chancery
            </Typography>
            <Typography className={classes.subheading} variant={"h2"}>
                Prepare for your next investment banking interview
            </Typography>
            <Link to={"/revise"} style={{textDecoration: "none"}}>
                <Button className={classes.button} variant={"outlined"} color={"primary"}>Start Revising</Button>
            </Link>
        </div>
    )
}

export default Home;