import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
    background: {
        backgroundColor: '#D3D3D3',
        width: '90%',
        borderRadius: '30px',
        textAlign:'center',
    },
    page: {
        color: 'grey',
        fontSize: '30px',
        paddingTop: '25px',
        paddingBottom: '40px',
    },
    initials: {
        fontWeight: 'bold',
        fontSize: '25px',
        display: 'inline-block'
    },
    question: {
        fontWeight: 'bold',
        fontSize: '25px',
        display: 'inline-block',
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

function Revise() {

    const classes = useStyles();

    return (
        <div>
            <Container className={classes.background} >
                <Typography className={classes.page} variant={"h1"} >
                1/420
                </Typography>
                <Typography className={classes.initials} variant={"h1"}>
                Q:&emsp;
                </Typography>
                <Typography id="question-content" className={classes.question} variant={"h1"} >
                What does success look like in this position, and how do you measure it?
                </Typography>
                
            </Container>
        </div>
    )
}

export default Revise;