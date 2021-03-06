import React from "react";
import SavedFlashcard from "../components/SavedFlashcard";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: "2560px",
    margin: "0 auto",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    textTransform: "uppercase",
    margin: "auto 0",
  },
  button: {
    borderRadius: "10px",
    color: "white",
    fontSize: "25px",
    textAlign: "center",
    textTransform: "uppercase",
    boxShadow: "none",
    width: "350px",
    height: "80px",

    "&:hover": {
      borderWidth: "3px",
      backgroundColor: "#ffffff",
      color: "#21CE99",
      boxShadow: "none",
    },
  },
  flashcardContainer: {
    marginTop: "30px",
    padding: "0",
  },
  subheading: {
    fontWeight: "bold",
    fontSize: "40px",
    textTransform: "uppercase",
    display: "inline-block",
  },
  footer: {
    background: "rgba(0, 0, 0, 0.2)",
    maxWidth: "100vw",
    height: "120px",
    position: "fixed",
    bottom: "calc(0% - 120px)",
    textAlign: "center",
    padding: "20px",
    zIndex: "1",
    transition: "bottom 0.5s",
  },
});

function detectScrollDown() {
  window.onscroll = function () {
    if (document.URL.includes("saved")) {
      /* if (this.oldScroll > this.scrollY) {
                document.getElementById("footer-popup").style.bottom = 'calc(0% - 120px)';
            }
            else {
                document.getElementById("footer-popup").style.bottom = 'calc(0%)';
            }

            this.oldScroll = this.scrollY; */

    }
  };
}

function Saved(props) {
  const classes = useStyles();
  const { savedCards, setSavedCards, loadingCards } = props;
  let history = useHistory();

  if (props.isUserLoggedIn === "loggedOut") {
    history.push("/login");
  }

  let cardElements = [];

  if (savedCards) {
    savedCards.forEach((item, index) => {
      cardElements.push(
        <Container
          key={item.flashCardID}
          className={classes.flashcardContainer}
        >
          <SavedFlashcard
            savedCards={savedCards}
            setSavedCards={setSavedCards}
            index={index}
            cardInfo={item.flashCard}
            user={props.user}
          />
        </Container>
      );
    });
  }


  detectScrollDown();

  return (
    <Grid container style={{ position: "relative", paddingTop: "10vh", minHeight: "100vh" }}>
      <Container style={{ padding: "3em 3em 150px 3em" }}>
        <Grid container>
          <Grid item container xs={1} />
          <Grid item container xs={6}>
            <Typography className={classes.title}>Saved Questions:</Typography>
          </Grid>
        </Grid>

        {loadingCards ? (
          <CircularProgress
            style={{ position: "absolute", left: "50%", top: "50%" }}
          />
        ) : (
          savedCards.length > 0 ?
          cardElements : 
          <Typography variant={"h4"} style={{textAlign: 'center', marginTop: "5rem"}}>
                No card has been saved
          </Typography>
        )}
      </Container>
    </Grid>
  );
}

export default Saved;
