import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
    background: {
        backgroundColor: '#D3D3D3',
        width: '60%',
        borderRadius: '30px',
        textAlign:'center',
        padding: '20px',
        marginTop: '50px',
    },
    page: {
        color: 'grey',
        fontSize: '30px',
        display: 'inline-block'
    },
    initials: {
        fontWeight: 'bold',
        fontSize: '30px',
        display: 'inline-block'
    },
    questionContainer: {
        padding: '15px',
        borderRadius: '30px',
        width: '70%',
        textAlign: 'left',
        display: 'flex',
    },
    questionContent: {
        fontWeight: 'bold',
        fontSize: '25px',
        display: 'inline-block',
        marginTop: '2.5px',
    },
    answerContainer: {
        marginTop: '20px',
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: 'white',
        width: '70%',
        borderRadius: '30px',
        opacity: "0.4",
        textAlign: 'left',
    },
    answerContent: {

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
                
                <Typography id="flashcard-id" className={classes.page} variant={"h1"} >
                1
                </Typography>
                <Typography className={classes.page} variant={"h1"} >
                &nbsp;/&nbsp;
                </Typography>
                <Typography id="total-flashcards" className={classes.page} variant={"h1"} >
                420
                </Typography>

                <br></br>

                <Container className={classes.questionContainer}>
                <Typography className={classes.initials} variant={"h1"}>
                Q:&emsp;
                </Typography>
                <Typography id="question-content" className={classes.questionContent} variant={"h1"} >
                What does success look like in this position, and how do you measure it?
                </Typography>
                </Container>

                <Container className={classes.answerContainer}>
                    <Typography className={classes.initials} variant={"h1"}>
                    A:&emsp;
                    </Typography>
                </Container>
                
            </Container>
        </div>
    )
}

export default Revise;