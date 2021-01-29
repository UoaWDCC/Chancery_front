import React, { useEffect, useState, useCallback } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

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
    marginTop: "5px",
  },
  save: {
    // float: "right",
    // margin: "0px -15px 0 -15px",
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
    padding: "30px 20px",
    position: "relative",
    boxShadow: theme.palette.type === "dark" ? "none" : theme.boxShadow,
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
    maxWidth: "100%",

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
    marginTop: "20px",

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
    },
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
    },
  },
  "@media (max-width: 960px)": {
    leftButton: {
      left: "0",
      marginLeft: "-14px",
    },
    rightButton: {
      right: "0",
      marginRight: "-14px",
    },
    questionContainer: {
      width: "100%",
    },
    questionContent: {
      fontSize: "20px",
    },
    answerContainer: {
      width: "100%",
    },
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

  const previousFlashcard = useCallback(() => {
    dispatch(updateCurrentIndex(currentIndex - 1));
    setShowAnswer(false);
  }, [dispatch, currentIndex]);

  const nextFlashcard = useCallback(() => {
    dispatch(updateCurrentIndex(currentIndex + 1));
    setShowAnswer(false);
  }, [dispatch, currentIndex]);

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
  }, [move, nextFlashcard, previousFlashcard]);

  return (
    <div style={{ height: "100%" }} id="top">
      {currentFlashcard === undefined ? (
        <Grid container justify="center" alignItems="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid
          container
          id="flashcard-box"
          className={classes.flashcardBackground}
          justify="center"
          alignItems="center"
        >
          <React.Fragment>
            <Grid container justify="space-between">
              <Grid item container justify="flex-start" xs={12} md={5}>
                <Tag text={currentFlashcard.topic} />
                <Tag text={currentFlashcard.difficulty} />
              </Grid>
              <Grid item container justify="center" xs={12} md={2}>
                <Typography id="flashcard-id" className={classes.page}>
                  {currentIndex + 1} / {displayedFlashcards.length}
                </Typography>
              </Grid>
              <Hidden smDown>
                <Grid item container justify="flex-end" xs={12} md={5}>
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
              </Hidden>
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
                href="#top"
                className={classes.hideButton}
                color="primary"
                variant={"contained"}
                onClick={() => setShowAnswer(!show)}
              >
                Hide Answer
              </Button>
            )}

            <Hidden smDown>
              <IconButton
                className={classes.leftButton}
                onClick={previousFlashcard}
              >
                <ArrowBackIcon style={{ fontSize: 40 }} />
              </IconButton>

              <IconButton
                className={classes.rightButton}
                onClick={nextFlashcard}
              >
                <ArrowForwardIcon style={{ fontSize: 40 }} />
              </IconButton>
            </Hidden>

            <Hidden mdUp>
              <Grid container style={{marginTop: "30px"}}>
                <Grid item xs={4}>
                  <IconButton
                    // className={classes.leftButton}
                    onClick={previousFlashcard}
                  >
                    <ArrowBackIcon style={{ fontSize: 40 }} />
                  </IconButton>
                </Grid>
                <Grid container item xs={4} justify="center" alignItems="center">
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
                <Grid item xs={4}>
                  <IconButton
                    // className={classes.rightButton}
                    onClick={nextFlashcard}
                  >
                    <ArrowForwardIcon style={{ fontSize: 40 }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Hidden>
          </React.Fragment>
        </Grid>
      )}
    </div>
  );
}

export default Flashcard;
