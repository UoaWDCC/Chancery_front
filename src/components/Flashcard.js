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
        margin: '-5px -25px 0 -15px',
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
        lineHeight: '170%',
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

        width: '170px',

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

        bottom: '20px',
        left: 'calc(50% - 85px)',

        width: '170px',

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

function isOverflown(element) {
            return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
          }


function Flashcard(props) {

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
            props.onClick();
            setShowAnswer(false);
            document.getElementById("answer-initial").style.color = '#818181';

            document.getElementById("answer-content").style.opacity = '0';
            document.getElementById("answer-content").style.visibility = 'hidden';

            document.getElementById("answer-container").style.height = '200px';
            document.getElementById("answer-container").style.flex = 'none';

            document.getElementById("one").style.height = '100%';

        }
        else { 
            if (isOverflown(document.getElementById("answer-content"))) {
            props.onClose();
            
            document.getElementById("one").style.height = '670px';
            document.getElementById("answer-container").style.flex = '1';

            if (isOverflown(document.getElementById("answer-content"))) {
                document.getElementById("one").style.height = '100%';
            }
        }
            setShowAnswer(true);
            document.getElementById("answer-initial").style.color = '#21CE99';

            document.getElementById("answer-content").style.opacity = '1';
            document.getElementById("answer-content").style.visibility = 'visible';





        }
    }


    return (
        <div>
            <Container id="one" className={"flashcard-background"} style={{display: 'flex', flexFlow: 'column'}}>

                <Grid container justify="center" alignItems="center" style={{height: 30}}>

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
                        <Typography className={classes.subheading} style={{fontSize: 20, marginTop: 10}} variant={"h3"}>
                            Save&nbsp;
                        </Typography>
                        <Button className={classes.save} disableRipple onClick={saveFlashcard} >
         
                            {saved ? <BookmarkTwoToneIcon style={{fontSize: 40}}/> : <BookmarkBorderIcon style={{fontSize: 40}}/> }
                        </Button>
                    </Grid>

                </Grid>

                <br/>
                <Container className={"question-container"} style={{width: '80%', display: 'flex'}}>

                <Typography className={classes.subheading} variant={"h4"}>
                Q:&emsp;
                </Typography>

                <Typography id="question-content" className={classes.questionContent} variant={"h4"} >
                What’s the difference between LIFO and FIFO? Can you walk me through an example of how they differ?
                </Typography>
                </Container>

                <Container id="answer-container" className={"answer-container"} style={{width: '80%', display: 'flex'}}>
                    <Typography id="answer-initial" className={classes.subheading} variant={"h4"} style={{color: '#818181'}}>
                    A:&emsp;
                    </Typography>
                    <Typography id="answer-content" className={classes.answerContent} variant={"h4"} >
                    First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO. But you may want to read this anyway because it’s good to know in case you ever work with US-based companies.
LIFO stands for “Last-In, First-Out” and FIFO stands for “First-In, First-Out” – they are 2 different ways of recording the value of inventory and the Cost of Goods Sold (COGS).
With LIFO, you use the value of the most recent inventory additions for COGS, but with FIFO you use the value of the oldest inventory additions for COGS.
Here’s an example: let’s say your starting inventory balance is $100 (10 units valued at $10 each). You add 10 units each quarter for $12 each in Q1, $15 each in Q2, $17 each in Q3, and $20 each in Q4, so that the total is $120 in Q1, $150 in Q2, $170 in Q3, and $200 in Q4.
You sell 40 of these units throughout the year for $30 each. In both LIFO and FIFO, you record 40 * $30 or $1,200 for the annual revenue.
The difference is that in LIFO, you would use the 40 most recent inventory purchase values – $120 + $150 + $170 + $200 – for the Cost of Goods Sold, whereas in FIFO you would use the 40 oldest inventory values – $100 + $120 + $150 + $170 – for COGS.
As a result, the LIFO COGS would be $640 and FIFO COGS would be $540, so LIFO would also have lower Pre-Tax Income and Net Income. The ending inventory value would be $100 higher under FIFO and $100 lower under FIFO.
In general if inventory is getting more expensive to purchase, LIFO will produce higher values for COGS and lower ending inventory values and vice versa if inventory is getting cheaper to purchase.
                </Typography>
                   {show ? <div/> : <Button id="show-button" className={classes.showButton} color="primary" variant={"contained"} onClick={showAnswer}>Show Answer</Button>} 
                </Container>

                {show ? <Button id="show-button" className={classes.hideButton} color="primary" variant={"contained"} onClick={showAnswer}>Hide Answer</Button> : <div/>} 

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

