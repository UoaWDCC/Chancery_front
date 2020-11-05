import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SavedIcon from "../icons/SavedIcon";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import withStyles from "@material-ui/core/styles/withStyles";
import Tag from "./Tag";

import { getDisplayedFlashcards } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentIndex } from "../redux/actions";

import CircularProgress from "@material-ui/core/CircularProgress";

import { useHotkeys } from "react-hotkeys-hook";

const useStyles = makeStyles((theme) => ({
  page: {
    color: theme.palette.type === "dark" ? "#fff" : "#818181",
    fontSize: "35px",
    display: "inline-block",
    lineHeight: "40px",
    marginTop: '5px',
  },
  save: {
    float: "right",
    margin: "0px -15px 0 -15px",
    "&:hover": {
      background: "none",
      borderWidth: "3px",
      borderColor: "#21CE99",
      color: "#21CE99",
    },
  },

  subheading: {
    fontWeight: "bold",
    fontSize: "40px",
    textTransform: "uppercase",
    display: "inline-block",
  },

  flashcardBackground: {
    backgroundColor: theme.palette.background.default,
    borderRadius: "10px",
    textAlign: "center",
    padding: "20px 30px 100px 20px",
    position: "relative",
    boxShadow: theme.palette.type === "dark" ? "none" : "0 0 5px 0 grey",
    display: "flex",
    flexFlow: "column",
  },

  questionContainer: {
    borderRadius: "30px",
    textAlign: "left",
    padding: "15px 25px 15px 25px",
    marginTop: "10px",
    minHeight: "100px",
    width: "80%",
    display: "flex",
  },

  answerContainer: {
    background: theme.palette.type === "dark" ? "#565656" : "#FDFDFD",
    borderRadius: "15px",
    textAlign: "left",
    position: "relative",
    padding: "15px 25px 15px 25px",
    marginTop: "30px",
    minHeight: "200px",
    width: "80%",
    display: "flex",
  },

  questionContent: {
    fontWeight: "bold",
    fontSize: "30px",
    display: "inline-block",
    marginTop: "2px",
  },
  showButton: {
    borderRadius: "5px",
    color: "white",
    fontSize: "20px",
    textAlign: "center",
    textTransform: "uppercase",
    padding: "10px 0px 10px 0px",
    boxShadow: "none",

    position: "absolute",
    left: "50%",
    top: "50%",
    webkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",

    width: "210px",

    "&:hover": {
      borderWidth: "3px",
      backgroundColor: "#ffffff",
      color: "#21CE99",
      boxShadow: "none",
    },
  },
  hideButton: {
    backgroundColor: theme.palette.type === "dark" ? "#565656" : "#fff",
    borderStyle: "solid",
    borderColor: theme.palette.type === "dark" ? "#929292" : "#fff",
    borderWidth: 2,
    borderRadius: 7,
    color: theme.palette.type === "dark" ? "#B4B4B4" : "#818181",
    fontSize: "20px",
    textAlign: "center",
    textTransform: "uppercase",
    padding: "10px 0px 10px 0px",
    boxShadow: "none",

    position: "absolute",
    bottom: "20px",
    left: "calc(50% - 105px)",

    width: "210px",

    "&:hover": {
      borderStyle: "solid",
      borderColor: "#B1B1B1",
      borderWidth: 2,
      backgroundColor: "#B1B1B1",
      color: "white",
      boxShadow: "none",
    },
  },

  leftButton: {
    position: "absolute",
    left: "calc(5% - 20px)",
    top: "calc(200px)",

    color: "#F5F5F5",
    backgroundColor: "#B1B1B1",

    height: "60px",
    width: "60px",
	"&:hover": {
      backgroundColor: "#B1B1B1",
	}
  },
  rightButton: {
    position: "absolute",
    right: "calc(5% - 20px)",
    top: "calc(200px)",

    color: "#F5F5F5",
    backgroundColor: "#B1B1B1",

    height: "60px",
    width: "60px",
	"&:hover": {
	  backgroundColor: "#B1B1B1",
	}
  },
}));

function Flashcard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const displayedFlashcards = useSelector(getDisplayedFlashcards);
  const currentIndex = useSelector((state) => state.currentIndex);
  const [currentFlashcard, setCurrentFlashcard] = useState(
    displayedFlashcards[currentIndex]
  );

  const previousFlashcard = () => {
    dispatch(updateCurrentIndex(currentIndex - 1));
    setShowAnswer(false);
  };

  const nextFlashcard = () => {
    dispatch(updateCurrentIndex(currentIndex + 1));
    setShowAnswer(false);
  };

  useEffect(() => {
    setCurrentFlashcard(displayedFlashcards[currentIndex]);
  }, [displayedFlashcards, currentIndex]);

  const [show, setShowAnswer] = useState(false);
  const [saved, setSaved] = useState(false);
  const [move, setMove] = useState("");

  const AnswerContent = withStyles({
    root: {
      visibility: show ? "visible" : "hidden",
      opacity: show ? "1" : "0",
      transition: "visibility 0s, opacity 0.5s linear",
    },
  })(Typography);

  useHotkeys("s", () => setSaved(!saved), [saved]);
  useHotkeys("left", () => setMove("left"), [move]);
  useHotkeys("right", () => setMove("right"), [move]);
  useHotkeys("space", () => setShowAnswer(!show), [show]);

  useEffect(() => {
    if (move === "left") {
      previousFlashcard();
    }

    if (move === "right") {
      nextFlashcard();
    }

    setMove("");
  }, [move]);

  return (
    <div style={{ height: "100%" }}>
      {currentFlashcard === undefined ? (
        <Grid container justify="center" alignItems="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid
          container
          id="flashcard-box"
          className={classes.flashcardBackground}
        >
          <React.Fragment>
            <Grid container justify="center">
              <Grid item container xs={5} style={{paddingRight: '40px'}}>
                <Tag text={currentFlashcard.topic} />
                <Tag text={currentFlashcard.difficulty} />
              </Grid>
              <Grid item container xs={2} justify="center">
                <Typography id="flashcard-id" className={classes.page}>
                  {currentIndex + 1} / {displayedFlashcards.length}
                </Typography>
              </Grid>
              <Grid item container xs={5} justify="flex-end" style={{ height: '40px' }}>
                <Typography
                  className={classes.subheading}
                  style={{ fontSize: 25, marginTop: 8 }}
                >
                  Save&nbsp;
                </Typography>
                <Button
                  className={classes.save}
                  disableRipple
                  onClick={() => setSaved(!saved)}
                >
                  {saved ? (
                    <SavedIcon style={{ fontSize: 40 }} />
                  ) : (
                    <BookmarkBorderIcon style={{ fontSize: 40 }} />
                  )}
                </Button>
              </Grid>
            </Grid>

            <Container className={classes.questionContainer}>
              <Typography className={classes.subheading} variant={"h4"}>
                Q.&emsp;
              </Typography>
              <Typography
                id="question-content"
                className={classes.questionContent}
              >
                {currentFlashcard.question}
              </Typography>
            </Container>

            <Container
              id="answer-container"
              className={classes.answerContainer}
              style={{
                flex: show ? "1" : "none",
                height: show ? "100%" : "200px",
              }}
            >
              <Typography
                id="answer-initial"
                className={classes.subheading}
                style={{ color: show ? "#21CE99" : "#818181" }}
              >
                A.&emsp;
              </Typography>
              <AnswerContent id="answer-content" component={"span"}>
                <pre>{currentFlashcard.answer}</pre>
              </AnswerContent>
              {!show && (
                <Button
                  id="show-button"
                  className={classes.showButton}
                  color="primary"
                  variant={"contained"}
                  onClick={() => setShowAnswer(!show)}
                >
                  Show Answer
                </Button>
              )}
            </Container>

            {show && (
              <Button
                id="show-button"
                className={classes.hideButton}
                color="primary"
                variant={"contained"}
                onClick={() => setShowAnswer(!show)}
              >
                Hide Answer
              </Button>
            )}

            <IconButton
              className={classes.leftButton}
              onClick={previousFlashcard}
            >
              <ArrowBackIcon style={{ fontSize: 40 }} />
            </IconButton>

            <IconButton className={classes.rightButton} onClick={nextFlashcard}>
              <ArrowForwardIcon style={{ fontSize: 40 }} />
            </IconButton>
          </React.Fragment>
        </Grid>
      )}
    </div>
  );
}

export default Flashcard;
