import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    background: {
        backgroundColor: '#F5F5F5',
        borderRadius: '10px',
        textAlign:'center',
        padding: '20px',
        position: 'relative',
    },
    tags: {
        color: 'white',
        backgroundColor: '#21CE99',
        borderRadius: '5px',
        fontSize: '14px',
        float: 'left',
        textTransform: 'uppercase',
        padding: '5px 10px 5px 10px',
        marginRight: '10px',
        
    },
    page: {
        fontWeight: 'bold',
        color: '#818181',
        fontSize: '20px',
        display: 'inline-block',
    },
    save: {
        float: 'right',
        fontSize: '14px',
        padding: '5px 10px 5px 10px',
        '&:hover': {
            borderWidth: '3px',
            borderColor: '#21CE99',
            backgroundColor: '#ffffff',
            color: '#21CE99',
        },
    },
    initials: {
        fontWeight: 'bold',
        fontSize: '25px',
        display: 'inline-block'
    },
    questionContainer: {
        padding: '15px',
        borderRadius: '30px',
        width: '80%',
        textAlign: 'left',
        display: 'flex',
        marginTop: '10px',
    },
    questionContent: {
        fontWeight: 'bold',
        fontSize: '20px',
        display: 'inline-block',
        marginTop: '2.5px',
    },
    answerContainer: {
        marginTop: '30px',
        marginBottom: '40px',
        padding: '15px',
        backgroundColor: 'white',
        width: '80%',
        borderRadius: '15px',
        textAlign: 'left',
        position: 'relative',
        height: '200px',
    },
    answerContent: {

    },
    answerButton: {
        color: 'white',
        backgroundColor: '#21CE99',
        borderColor: '#ffffff',
        borderWidth: '3px',
        borderRadius: '5px',
        fontSize: '14px',
        padding: '10px 20px 10px 20px',
        textTransform: 'uppercase',
        boxShadow: 'none',
        position: 'absolute',
        left: '50%',
        top: '50%',
        webkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',


        '&:hover': {
            borderWidth: '3px',
            borderColor: '#21CE99',
            backgroundColor: '#ffffff',
            color: '#21CE99',
            boxShadow: 'none',
        },
    },

    leftButton: {
        position: 'absolute',
        left: 'calc(5% - 15px)',
        top: 'calc(50% - 30px)',

        color: '#F5F5F5',
        backgroundColor: '#818181',

        '&:hover': {
        },

    },
    rightButton: {
        position: 'absolute',
        right: 'calc(5% - 15px)',
        top: 'calc(50% - 30px)',

        color: '#F5F5F5',
        backgroundColor: '#818181',
    }

    

})

function Flashcard() {

    const classes = useStyles();

    return (
        <div>
            <Container className={classes.background} >

                <Grid container justify="center" alignItems="center">

                    <Grid item container xs={4} justify="left">
                        <Typography id="difficulty" className={classes.tags} variant={"h1"} >
                        Easy
                        </Typography>

                        <Typography id="topic" className={classes.tags} variant={"h1"} >
                        Accounting
                        </Typography>
                    </Grid>

                    <Grid item container xs={4} justify="center">
                        <Typography id="flashcard-id" className={classes.page} variant={"h1"} >
                        1
                        </Typography>

                        <Typography className={classes.page} variant={"h1"} >
                        &nbsp;/&nbsp;
                        </Typography>

                        <Typography id="total-flashcards" className={classes.page} variant={"h1"} >
                        420
                        </Typography>
                    </Grid>

                    <Grid item container xs={4} justify="flex-end">
                        <Button className={classes.save} >
                        Save x
                        </Button>
                    </Grid>

                </Grid>

                <br/>
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
                    <Button className={classes.answerButton} variant={"outlined"}>SHOW ANSWER</Button>
                </Container>

                <IconButton className={classes.leftButton} >
                &lt;
                </IconButton>

                <IconButton className={classes.rightButton} >
                &gt;
                </IconButton>
                
            </Container>
        </div>
    )
}

export default Flashcard;