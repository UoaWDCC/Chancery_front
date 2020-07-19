import React from "react";

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
        backgroundColor: theme.palette.type === "dark" ? '#5F5F5F' : '#F5F5F5',
        borderRadius: '10px',
        textAlign: 'center',
        padding: '20px 20px 94px 20px',
        position: 'relative',
        boxShadow: '0 0 5px 0 grey',
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
      },
      
      answerContainer: {
        background: theme.palette.type === "dark" ? '#565656' : '#FDFDFD',
        borderRadius: '15px',
        textAlign: 'left',
        position: 'relative',
        padding: '15px',
        marginTop: '30px',
        height: '200px',
      },

    questionContent: {
        fontWeight: 'bold',
        fontSize: '30px',
        display: 'inline-block',
        marginTop: '2px',
    },
    answerContent: {
        fontSize: '20px',
        display: 'inline-block',
        marginTop: '2.5px',
        lineHeight: '40px',
        visibility: 'hidden',
        opacity: '0',
        transition: 'visibility 0s, opacity 0.5s linear',
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
function isOverflown(element) {
            return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
          }


function Flashcard(props) {

    const classes = useStyles();

    // Define a state to detect if flashcard is saved
    const [saved, setSaved] = React.useState(0);
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
    
    const [show, setShowAnswer] = React.useState(0);
    const showAnswer = (event) => {

        // NOTE: THIS NEEDS TO BE OPTIMISED 
        if (show) { 
            props.onClick();
            setShowAnswer(false);
            document.getElementById("answer-initial").style.color = '#818181';

            document.getElementById("answer-content").style.opacity = '0';
            document.getElementById("answer-content").style.visibility = 'hidden';

            document.getElementById("answer-container").style.height = '200px';
            document.getElementById("answer-container").style.flex = 'none';

            document.getElementById("flashcard-box").style.height = '100%';

        }
        else { 
            // Check if answer exceeds initial height of 200px 
            if (isOverflown(document.getElementById("answer-content"))) {
                props.onClose();
                
                document.getElementById("answer-container").style.flex = '1';

                document.getElementById("flashcard-box").style.height = '750px';

                 // Check if answer exceeds filter-box height of 750px 
                if (isOverflown(document.getElementById("answer-content"))) {
                    props.onClose();
                    
                    document.getElementById("answer-container").style.flex = '1';
    
                    document.getElementById("flashcard-box").style.height = '100%';
    
                }
            }
            setShowAnswer(true);
            document.getElementById("answer-initial").style.color = '#21CE99';

            document.getElementById("answer-content").style.opacity = '1';
            document.getElementById("answer-content").style.visibility = 'visible';
        }
    }

    return (
        <div style={{height: '100%'}}>
            <Container id="flashcard-box" className={classes.flashcardBackground}>

                {/* Top row is a grid containing two tags, page numbers and save toggle button */}
                <Grid container justify="center" alignItems="center">
                    
                    {/* Tags */}
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

                    {/* Page Numbers*/}
                    <Grid item container xs={2} md={4} justify="center" >
                        <Typography id="flashcard-id" className={classes.page}>
                            1 &nbsp;/&nbsp; 420
                        </Typography>
                    </Grid>

                    {/* Save Toggle Button */}
                    <Grid item container xs={5} md={4} justify="flex-end">
                        <Typography className={classes.subheading} style={{fontSize: 25, marginTop: 3}}>
                            Save&nbsp;
                        </Typography>
                        <Button className={classes.save} disableRipple onClick={saveFlashcard} >
                            {saved ? <BookmarkTwoToneIcon style={{fontSize: 40}}/> : <BookmarkBorderIcon style={{fontSize: 40}}/> }
                        </Button>
                    </Grid>

                </Grid>

                <Container className={classes.questionContainer} style={{width: '80%', display: 'flex'}}>

                    <Typography className={classes.subheading} variant={"h4"}>Q.&emsp;</Typography>

                    <Typography id="question-content" className={classes.questionContent}>
                        What’s the difference between LIFO and FIFO? Can you walk me through an example of how they differ?
                    </Typography>

                </Container>

                <Container id="answer-container" className={classes.answerContainer} style={{width: '80%', display: 'flex'}}>

                    <Typography id="answer-initial" className={classes.subheading} style={{color: '#818181'}}>A.&emsp;</Typography>

                    <Typography id="answer-content" className={classes.answerContent}>
                         First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO. 
                         First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO. 
                         First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO. 
                         First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO.  First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO. 
                         
                         </Typography>

                    {/* If answer is hidden, define the CSS class within the answer-container */}
                    {show ? <div/> : <Button id="show-button" className={classes.showButton} color="primary" variant={"contained"} onClick={showAnswer}>Show Answer</Button>} 

                </Container>

                {/* Else define it within the flashcard-background */}
                {show ? <Button id="show-button" className={classes.hideButton} color="primary" variant={"contained"} onClick={showAnswer}>Hide Answer</Button> : <div/>} 

                <IconButton className={classes.leftButton} >
                    <ArrowBackIcon style={{fontSize: 40}}/>
                </IconButton>

                <IconButton className={classes.rightButton} >
                    <ArrowForwardIcon style={{fontSize: 40}}/>
                </IconButton>
                
            </Container>
        </div>
    )
}

export default Flashcard;

