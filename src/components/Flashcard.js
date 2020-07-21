import React, {useState} from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkTwoToneIcon from '@material-ui/icons/BookmarkTwoTone';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles( theme =>({
    tags: {
        backgroundColor: '#21CE99',
        borderRadius: '5px',
        color: 'white',
        fontSize: '18px',
        textTransform: 'uppercase',
        float: 'left',
        padding: '5px 10px 5px 10px',
        margin: ' 0 10px 5px 0',
    },
    page: {
        color: theme.palette.type === "dark" ? '#fff' : '#818181',
        fontSize: '43px',
        display: 'inline-block',
    },
    save: {
        float: 'right',
        margin: '-5px -15px 0 -15px',
        '&:hover': {
            background: 'none',
            borderWidth: '3px',
            borderColor: '#21CE99',
            color: '#21CE99',
        },
    },

    subheading: {
        fontWeight: 'bold',
        fontSize: '40px',
        textTransform: 'uppercase',
        display: 'inline-block',
    },

    flashcardBackground: {
        backgroundColor: theme.palette.background.default,
        borderRadius: '10px',
        textAlign: 'center',
        padding: '20px 20px 94px 20px',
        position: 'relative',
        boxShadow: theme.palette.type === "dark" ? 'none' : '0 0 5px 0 grey',
        display: 'flex',
        flexFlow: 'column',
        height: '100%',
    },

    questionContainer: {
        borderRadius: '30px',
        textAlign: 'left',
        padding: '15px',
        marginTop: '10px',
        minHeight: '100px',
        width: '80%',
        display: 'flex'
    },

    answerContainer: {
        background: theme.palette.type === "dark" ? '#565656' : '#FDFDFD',
        borderRadius: '15px',
        textAlign: 'left',
        position: 'relative',
        padding: '15px',
        marginTop: '30px',
        height: '200px',
        width: '80%',
        display: 'flex'
    },

    questionContent: {
        fontWeight: 'bold',
        fontSize: '30px',
        display: 'inline-block',
        marginTop: '2px',
    },
    showButton: {
        borderRadius: '5px',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        textTransform: 'uppercase',
        padding: '10px 0px 10px 0px',
        boxShadow: 'none',

        position: 'absolute',
        left: '50%',
        top: '50%',
        webkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',

        width: '210px',

        '&:hover': {
            borderWidth: '3px',
            backgroundColor: '#ffffff',
            color: '#21CE99',
            boxShadow: 'none',
        },
    },
    hideButton: {
        backgroundColor: theme.palette.type === "dark" ? '#565656' : '#fff',
        borderStyle: 'solid',
        borderColor: theme.palette.type === "dark" ? '#929292' : '#fff',
        borderWidth: 2,
        borderRadius: 7,
        color: theme.palette.type === "dark" ? '#B4B4B4' : '#818181',
        fontSize: '20px',
        textAlign: 'center',
        textTransform: 'uppercase',
        padding: '10px 0px 10px 0px',
        boxShadow: 'none',

        position: 'absolute',
        bottom: '20px',
        left: 'calc(50% - 105px)',

        width: '210px',

        '&:hover': {
            borderStyle: 'solid',
            borderColor: '#B1B1B1',
            borderWidth: 2,
            backgroundColor: '#B1B1B1',
            color: 'white',
            boxShadow: 'none',
        },
    },

    leftButton: {
        position: 'absolute',
        left: 'calc(5% - 15px)',
        top: 'calc(200px)',

        color: '#F5F5F5',
        backgroundColor: '#B1B1B1',

        height: '60px',
        width: '60px',

    },
    rightButton: {
        position: 'absolute',
        right: 'calc(5% - 15px)',
        top: 'calc(200px)',

        color: '#F5F5F5',
        backgroundColor: '#B1B1B1',

        height: '60px',
        width: '60px',
    },
}))

// Detects if answer-content is too large for answer-container, https://stackoverflow.com/questions/9333379/check-if-an-elements-content-is-overflowing/34299947 
function isOverflown() {
    const element = document.getElementById("answer-content");
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function Flashcard(props) {

    const classes = useStyles();
    const [show, setShowAnswer] = useState(false);
    const [saved, setSaved] = useState(false);

    const saveFlashcard = (event) => {
        if (saved) {
            setSaved(false);
            event.currentTarget.style.filter = 'none';
        }
        else {
            setSaved(true);
            // https://codepen.io/sosuke/pen/Pjoqqp
            event.currentTarget.style.filter = 'invert(62%) sepia(94%) saturate(364%) hue-rotate(108deg) brightness(89%) contrast(91%)';
        }
    };

    const AnswerContent = withStyles({
        root: {
            fontSize: '20px',
            display: 'inline-block',
            marginTop: '2.5px',
            lineHeight: '40px',
            visibility: show ? 'visible' : 'hidden',
            opacity: show ? '1' : '0',
            transition: 'visibility 0s, opacity 0.5s linear',
        },
    })(Typography);

    const showAnswer = () => {
        if (isOverflown()) {
            props.setIsRendered(false);
            document.getElementById("answer-container").style.flex = '1';
            document.getElementById("flashcard-box").style.height = '750px';
            if (isOverflown()) {
                document.getElementById("flashcard-box").style.height = '100%';
            }
        }
        setShowAnswer(true);
    }

    const hideAnswer = () => {
        props.setIsRendered(true);
        setShowAnswer(false);
        document.getElementById("answer-container").style.height = '200px';
        document.getElementById("answer-container").style.flex = 'none';
        document.getElementById("flashcard-box").style.height = '100%';
    }

    return (
        <div style={{height: '100%'}}>
            <Grid container id="flashcard-box" className={classes.flashcardBackground}>
                <Grid container justify="center" alignItems="center">
                    <Grid item container xs={5} md={4}>
                        <Typography id="difficulty" className={classes.tags}>
                            <LocalOfferIcon style={{ fontSize: 18}}/>
                            &nbsp;Easy
                        </Typography>
                        <Typography id="topic" className={classes.tags}>
                            <LocalOfferIcon style={{ fontSize: 18}}/>
                            &nbsp;Accounting
                        </Typography>
                    </Grid>
                    <Grid item container xs={2} md={4} justify="center" >
                        <Typography id="flashcard-id" className={classes.page}>
                            1 &nbsp;/&nbsp; 420
                        </Typography>
                    </Grid>
                    <Grid item container xs={5} md={4} justify="flex-end">
                        <Typography className={classes.subheading} style={{fontSize: 25, marginTop: 3}}>
                            Save&nbsp;
                        </Typography>
                        <Button className={classes.save} disableRipple onClick={saveFlashcard} >
                            {saved ? <BookmarkTwoToneIcon style={{fontSize: 40}}/> : <BookmarkBorderIcon style={{fontSize: 40}}/> }
                        </Button>
                    </Grid>
                </Grid>

                <Container className={classes.questionContainer}>
                    <Typography className={classes.subheading} variant={"h4"}>Q.&emsp;</Typography>
                    <Typography id="question-content" className={classes.questionContent}>
                        What’s the difference between LIFO and FIFO? Can you walk me through an example of how they differ?
                    </Typography>
                </Container>

                <Container id="answer-container" className={classes.answerContainer}>
                    <Typography id="answer-initial" className={classes.subheading} style={{color: show ? '#21CE99' : '#818181' }}>A.&emsp;</Typography>
                    <AnswerContent id="answer-content">
                        First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.
                        First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.
                    </AnswerContent>
                    {!show && <Button id="show-button" className={classes.showButton} color="primary" variant={"contained"} onClick={showAnswer}>Show Answer</Button>}
                </Container>

                {show && <Button id="show-button" className={classes.hideButton} color="primary" variant={"contained"} onClick={hideAnswer}>Hide Answer</Button>}

                <IconButton className={classes.leftButton} >
                    <ArrowBackIcon style={{fontSize: 40}}/>
                </IconButton>

                <IconButton className={classes.rightButton} >
                    <ArrowForwardIcon style={{fontSize: 40}}/>
                </IconButton>

            </Grid>
        </div>
    )
}

export default Flashcard;

