import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

// import BookmarkTwoToneIcon from "@material-ui/icons/BookmarkTwoTone";
import SavedIcon from "../icons/SavedIcon";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { deleteBookmark } from "../api/userApi";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "20px",
  },
  flashcardBackground: {
    backgroundColor: theme.palette.background.default,
    borderRadius: "10px",
    boxShadow: theme.palette.type === "dark" ? "none" : theme.boxShadow,
    padding: "20px 40px 20px 40px",
  },
  subheading: {
    fontWeight: "bold",
    fontSize: "40px",
    textTransform: "uppercase",
    display: "inline-block",
  },
  questionContainer: {
    padding: "0px",
    minHeight: "100px",
    display: "flex",
  },
  questionContent: {
    fontWeight: "bold",
    fontSize: "25px",
    display: "inline-block",
    marginTop: "7px",
  },
  save: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  answerContainer: {
    padding: "0px",
    display: "flex",
    margin: "5px",
  },
  answerContent: {
    fontSize: "20px",
    display: "inline-block",
    lineHeight: "40px",
  },
  showButton: {
    fontSize: "20px",
    textAlign: "center",
    textTransform: "uppercase",
    padding: "10px 0px 10px 0px",
    boxShadow: "none",
    backgroundColor: theme.palette.type === "dark" ? "#565656" : "#fff",
    borderStyle: "solid",
    borderColor: theme.palette.type === "dark" ? "#929292" : "#C3C3C3",
    borderWidth: 2,
    borderRadius: 7,
    color: theme.palette.type === "dark" ? "#B4B4B4" : "#818181",
    margin: "15px 0 15px 83px",

    width: "210px",

    "&:hover": {
      backgroundColor: "#B1B1B1",
      color: "white",
      boxShadow: "none",
    },
  },
}));

function SavedFlashcard(props) {
  const classes = useStyles();

  const [show, setShowAnswer] = useState(false);
  const [saved, setSaved] = useState(true);
  const [loading, setLoading] = useState(false);

  const { index, user, cardInfo, setSavedCards, savedCards } = props;

  const handleSaved = async () => {
    let param = {
      emailAddress: user.attributes.email,
      flashCardID: cardInfo.id,
    };
    setLoading(true);
    await deleteBookmark(param);
    let result = savedCards.filter((item) => item.flashCardID !== cardInfo.id);
    setSavedCards(result);
    setSaved(false);
  };

  return (
    <div>
      <Grid container>
        <Grid item container xs={1}>
          <Typography className={classes.title}>{index + 1}</Typography>
        </Grid>

        <Grid item container xs={11} className={classes.flashcardBackground}>
          <Grid item container xs={11}>
            <Container
              className={classes.questionContainer}
              style={{ display: "flex" }}
            >
              <Typography className={classes.subheading}>Q.&emsp;</Typography>

              <Typography
                id="question-content"
                className={classes.questionContent}
              >
                {cardInfo.question}
              </Typography>
            </Container>

            <Container
              id="answer-container"
              className={classes.answerContainer}
            >
              {show && (
                <Typography
                  id="answer-initial"
                  className={classes.subheading}
                  color="primary"
                >
                  A.&emsp;
                </Typography>
              )}
              {show && (
                <Typography
                  id="answer-content"
                  className={classes.answerContent}
                >
                  {cardInfo.answer}
                </Typography>
              )}
            </Container>
          </Grid>

          <Grid item container xs={1} justify="flex-end">
            <IconButton
              className={classes.save}
              disableRipple
              onClick={handleSaved}
            >
              {loading ? (
                <CircularProgress
                  style={{ position: "absolute", top: "7px", fontSize: 60 }}
                />
              ) : saved ? (
                <SavedIcon
                  style={{
                    fontSize: 60,
                    position: "absolute",
                    top: "7px",
                  }}
                />
              ) : (
                <BookmarkBorderIcon
                  style={{
                    fontSize: 60,
                    position: "absolute",
                    top: "7px",
                  }}
                />
              )}
            </IconButton>
          </Grid>

          {show ? (
            <Button
              id="show-button"
              className={classes.showButton}
              color="primary"
              variant={"contained"}
              onClick={() => setShowAnswer(!show)}
            >
              {" "}
              Hide Answer
            </Button>
          ) : (
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
        </Grid>
      </Grid>
    </div>
  );
}

export default SavedFlashcard;
