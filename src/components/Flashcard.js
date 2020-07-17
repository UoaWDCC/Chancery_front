import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkTwoToneIcon from '@material-ui/icons/BookmarkTwoTone';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
    tags: {
        color: 'white',
        backgroundColor: '#21CE99',
        borderRadius: '5px',
        fontSize: '15px',
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
        margin: '0 -25px 0 -15px',
        '&:hover': {
            borderWidth: '3px',
            borderColor: '#21CE99',
            color: '#21CE99',
            background: 'none',
        },
    },
    subheading: {
        fontWeight: 'bold',
        fontSize: '30px',
        display: 'inline-block',
        textTransform: 'uppercase',
    },
    questionContent: {
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'inline-block',
        marginTop: '6px',
    },
    answerContent: {
        fontSize: '20px',
        marginTop: '2.5px',
        visibility: 'hidden',
        opacity: '0',
        transition: 'visibility 0s, opacity 0.5s linear',
        display: 'inline-block',
        lineHeight: '150%',
    },
    showButton: {
        color: 'white',
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
            backgroundColor: '#ffffff',
            color: '#21CE99',
            boxShadow: 'none',
        },
    },

    hideButton: {
        color: '#818181',
        backgroundColor: 'white',
        borderRadius: '5px',
        fontSize: '14px',
        padding: '10px 20px 10px 20px',
        textTransform: 'uppercase',
        boxShadow: 'none',
        position: 'absolute',
        
        left: '50%',
        top: '50%',

        webkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, 100%) translateY(74px)',

        '&:hover': {
            borderWidth: '3px',
            backgroundColor: '#B1B1B1',
            color: 'white',
            boxShadow: 'none',
        },
    },

    leftButton: {
        position: 'absolute',
        left: 'calc(5% - 15px)',
        top: 'calc(50% - 30px)',

        color: '#F5F5F5',
        backgroundColor: '#B1B1B1',
        
        height: '40px',
        width: '40px',


    },
    rightButton: {
        position: 'absolute',
        right: 'calc(5% - 15px)',
        top: 'calc(50% - 30px)',

        color: '#F5F5F5',
        backgroundColor: '#B1B1B1',

        height: '40px',
        width: '40px',
    },


      mirror: {
        transform: [{ scaleX: '-1' }]
        }


})


function Flashcard() {

    const classes = useStyles();

    const [saved, setSaved] = React.useState(0);
    const saveFlashcard = (event) => {
        if (saved) {
            setSaved(false);
            event.currentTarget.style.filter = 'none'; 
        }
        else {
            setSaved(true);
            event.currentTarget.style.filter = 'invert(62%) sepia(94%) saturate(364%) hue-rotate(108deg) brightness(89%) contrast(91%)';
        }
    };

    const [show, setShowAnswer] = React.useState(0);
    const showAnswer = (event) => {
        if (show) {
            setShowAnswer(false);
            document.getElementById("answer-initial").style.color = '#818181';

            document.getElementById("show-button").innerHTML = 'Show Answer';

            document.getElementById("answer-content").style.opacity = '0';
            document.getElementById("answer-content").style.visibility = 'hidden';

        }
        else {
            setShowAnswer(true);
            document.getElementById("answer-initial").style.color = '#21CE99';

            document.getElementById("show-button").innerHTML = "Hide Answer";

            document.getElementById("answer-content").style.opacity = '1';
            document.getElementById("answer-content").style.visibility = 'visible';
        }
    }


    return (
        <div>
            <Container className={"flashcard-background"} >

                <Grid container justify="center" alignItems="center">

                    <Grid item container xs={5}>
                        <Typography id="difficulty" className={classes.tags} variant={"h3"} >
                            <LocalOfferIcon style={{ fontSize: 10}}/>
                                
                        &nbsp;Easy
                        </Typography>

                        <Typography id="topic" className={classes.tags} variant={"h3"} >
                        <LocalOfferIcon style={{ fontSize: 10}}/>
                        &nbsp;Accounting
                        </Typography>
                    </Grid>

                    <Grid item container xs={2} justify="center">
                        <Typography id="flashcard-id" className={classes.page} variant={"h5"} >
                        1
                        </Typography>

                        <Typography className={classes.page} variant={"h5"} >
                        &nbsp;/&nbsp;
                        </Typography>

                        <Typography id="total-flashcards" className={classes.page} variant={"h5"} >
                        420
                        </Typography>
                    </Grid>

                    <Grid item container xs={5} justify="flex-end">
                        <Typography className={classes.subheading} style={{fontSize: 16, marginTop: 8}} variant={"h3"}>
                            Save
                        </Typography>
                        <Button className={classes.save} disableRipple onClick={saveFlashcard} >
         
                            {saved ? <BookmarkTwoToneIcon /> : <BookmarkBorderIcon /> }
                        </Button>
                    </Grid>

                </Grid>

                <br/>
                <Container className={"question-container"} style={{width: '80%', display: 'flex'}}>

                <Typography className={classes.subheading} variant={"h4"}>
                Q:&emsp;
                </Typography>

                <Typography id="question-content" className={classes.questionContent} variant={"h4"} >
                What does success look like in this position, and how do you measure it?
                </Typography>
                </Container>

                <Container id="answer-box" className={"answer-container"} style={{width: '80%', display: 'flex'}}>
                    <Typography id="answer-initial" className={classes.subheading} variant={"h4"} style={{color: '#818181'}}>
                    A:&emsp;
                    </Typography>
                    <Typography id="answer-content" className={classes.answerContent} variant={"h4"} >
                    I try to set goals that meet or beat expectations, and work as hard as I can to
complete those goals. If I make mistakes along the way, then I know I can
improve and still have work to do, but if I reach those goals and achieve my
desired outcome, I consider that a success.
                </Typography>
                    <Button id="show-button" className={show ? classes.hideButton : classes.showButton} color="primary" variant={"contained"} onClick={showAnswer}>SHOW ANSWER</Button>
                </Container>

                <IconButton className={classes.leftButton} >
                    <ArrowBackIcon/>
                </IconButton>

                <IconButton className={classes.rightButton} >
                    <ArrowForwardIcon/>
                </IconButton>
                
            </Container>
        </div>
    )
}

export default Flashcard;

