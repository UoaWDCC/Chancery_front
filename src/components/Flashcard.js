import React, { useCallback, useEffect, useState } from "react";
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

import { getFlashcards, getDisplayedFlashcards } from "../redux/selectors";
import { useSelector } from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  page: {
    color: theme.palette.type === "dark" ? "#fff" : "#818181",
    fontSize: "43px",
    display: "inline-block",
  },
  save: {
    float: "right",
    margin: "-5px -15px 0 -15px",
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
    padding: "20px 30px 100px 30px",
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
    height: "200px",
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
    left: "calc(5% - 15px)",
    top: "calc(200px)",

    color: "#F5F5F5",
    backgroundColor: "#B1B1B1",

    height: "60px",
    width: "60px",
  },
  rightButton: {
    position: "absolute",
    right: "calc(5% - 15px)",
    top: "calc(200px)",

    color: "#F5F5F5",
    backgroundColor: "#B1B1B1",

    height: "60px",
    width: "60px",
  },
}));

// Detects if answer-content is too large for answer-container, https://stackoverflow.com/questions/9333379/check-if-an-elements-content-is-overflowing/34299947
function isOverflown() {
  const element = document.getElementById("answer-content");
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

function Flashcard() {
  const classes = useStyles();
  const selectedIds = useSelector(getDisplayedFlashcards);
  const fullBank = useSelector(getFlashcards);
  const [flashcardsBank, setFlashcardsBank] = useState(fullBank);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFlashcard, setCurrentFlashcard] = useState(flashcardsBank[0]);

  const previousFlashcard = () => {
    setCurrentFlashcard(
      currentIndex === 0
        ? flashcardsBank[flashcardsBank.length - 1]
        : flashcardsBank[currentIndex - 1]
    );
    hideAnswer();
  };

  const nextFlashcard = () => {
    setCurrentFlashcard(
      currentIndex === flashcardsBank.length - 1
        ? flashcardsBank[0]
        : flashcardsBank[currentIndex + 1]
    );
    hideAnswer();
  };

  useEffect(() => {
    setFlashcardsBank(fullBank);
  }, [fullBank]);

  useEffect(() => {
    setFlashcardsBank(fullBank);
  }, [fullBank]);

  useEffect(() => {
      setCurrentIndex(0);
      setFlashcardsBank(selectedIds.length === 0 ? fullBank : fullBank.filter(flashcard => selectedIds.includes(flashcard.id)));
  }, [selectedIds]);

  useEffect(()=> {
      setCurrentFlashcard(flashcardsBank[0]);
  }, [flashcardsBank]);

  useEffect(()=> {
    if (currentFlashcard != null) {
      setCurrentIndex(flashcardsBank.findIndex(flashcard => flashcard.id === currentFlashcard.id))
    }
  }, [currentFlashcard]);

  const [show, setShowAnswer] = useState(false);
  const [saved, setSaved] = useState(false);

  const AnswerContent = withStyles({
    root: {
      visibility: show ? "visible" : "hidden",
      opacity: show ? "1" : "0",
      transition: "visibility 0s, opacity 0.5s linear",
    },
  })(Typography);

  const showAnswer = () => {
    if (isOverflown()) {
      document.getElementById("answer-container").style.flex = "1";
      document.getElementById("answer-container").style.height = "100%";
    }
    setShowAnswer(true);
  };

  const hideAnswer = () => {
    setShowAnswer(false);
    document.getElementById("answer-container").style.height = "200px";
    document.getElementById("answer-container").style.flex = "none";
  };

  const hkFunction = useCallback(
    (event) => {
      if (event.keyCode === 32) {
        show ? hideAnswer() : showAnswer();
      }
      if (event.keyCode === 39) {
        nextFlashcard();
      }
      if (event.keyCode === 37) {
        previousFlashcard();
      }
      if (event.keyCode === 83) {
        setSaved(!saved);
      }
    },
    [show, currentIndex, saved]
  );

  useEffect(() => {
    document.addEventListener("keydown", hkFunction, false);
    document.querySelectorAll("button").forEach(function (item) {
      item.addEventListener("focus", function () {
        this.blur();
      });
    });
    return () => {
      document.removeEventListener("keydown", hkFunction, false);
    };
  }, [hkFunction]);

  return (
    <div style={{ height: "100%", maxWidth: 1150 }}>
      {(currentFlashcard === undefined) ? (
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <CircularProgress />
        </Grid>
      ) : (
        <Grid
          container
          id="flashcard-box"
          className={classes.flashcardBackground}
        >
          <React.Fragment>
            <Grid container justify="center" alignItems="center">
              <Grid item container xs={5} md={4}>
                <Tag text={currentFlashcard.topic} />
                <Tag text={currentFlashcard.difficulty} />
              </Grid>
              <Grid item container xs={2} md={4} justify="center">
                <Typography id="flashcard-id" className={classes.page}>
                  {currentIndex + 1} &nbsp;/&nbsp; {flashcardsBank.length}
                </Typography>
              </Grid>
              <Grid item container xs={5} md={4} justify="flex-end">
                <Typography
                  className={classes.subheading}
                  style={{ fontSize: 25, marginTop: 3 }}
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
            >
              <Typography
                id="answer-initial"
                className={classes.subheading}
                style={{ color: show ? "#21CE99" : "#818181" }}
              >
                A.&emsp;
              </Typography>
              <AnswerContent id="answer-content">
                <pre>{currentFlashcard.answer}</pre>
              </AnswerContent>
              {!show && (
                <Button
                  id="show-button"
                  className={classes.showButton}
                  color="primary"
                  variant={"contained"}
                  onClick={showAnswer}
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
                onClick={hideAnswer}
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
