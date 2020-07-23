import React from "react";
import SavedFlashcard from "../components/SavedFlashcard";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
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
    background: 'rgba(0, 0, 0, 0.2)',
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

      // LATER remove 200 and Calculate actual y pos of practice button
      if (this.scrollY > 200) {
        document.getElementById("footer-popup").style.bottom = "calc(0%)";
      } else {
        document.getElementById("footer-popup").style.bottom =
          "calc(0% - 120px)";
      }
    }
  };
}

function Saved() {
    
  const classes = useStyles();

  detectScrollDown();

  return (
    <div style={{ position: "relative", paddingTop: '10vh' }}>
      <Container style={{ padding: "3em 3em 150px 3em" }}>
        <Grid container>
          <Grid item container xs={1}/>
          <Grid item container xs={6}>
            <Typography className={classes.title}>Saved Questions:</Typography>
          </Grid>
          <Grid item container xs={5} justify="flex-end">
            <Link to={"/revise"} style={{ textDecoration: "none" }}>
              <Button
                className={classes.button}
                color={"primary"}
                variant={"contained"}
              >
                Practice Now
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Container className={classes.flashcardContainer}>
          <SavedFlashcard />
        </Container>

        <Container className={classes.flashcardContainer}>
          <SavedFlashcard />
        </Container>

        <Container className={classes.flashcardContainer}>
          <SavedFlashcard />
        </Container>

        <Container className={classes.flashcardContainer}>
          <SavedFlashcard />
        </Container>
      </Container>

      <Container id="footer-popup" className={classes.footer}>
        <Link to={"/revise"} style={{ textDecoration: "none" }}>
          <Button
            className={classes.button}
            color={"primary"}
            variant={"contained"}
          >
            Practice Now
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default Saved;
