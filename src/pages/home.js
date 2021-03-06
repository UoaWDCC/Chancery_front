import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Logo from "../icons/Chancery_logo.png";
import ParticleComponent from "../components/ParticleComponent";
import Socials from "../components/Socials";

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingBottom: "25px",
    paddingTop: "25px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      fontSize: "42px",
    },
  },
  subheading: {
    fontSize: "35px",
    fontWeight: "bold",
    paddingBottom: "60px",
    textAlign: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  button: {
    backgroundColor: theme.palette.type === "dark" ? "#000000" : "#fff",
    borderRadius: "7px",
    borderColor: "#21CE99",
    borderWidth: "3px",
    fontWeight: "bold",
    fontSize: "25px",
    padding: "15px 35px 15px 35px",
    marginBottom: "100px",
    "&:hover": {
      borderWidth: "3px",
      backgroundColor: "#21CE99",
      color: "#ffffff",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  logo: {
    height: 150,
    width: 150,
  },
}));

function Home(props) {
  const classes = useStyles();

  return (
    <Grid
      className={"welcome-page"}
      container
      spacing={0}
      direction="column"
      style={{ minHeight: "100vh" }}
    >
      <ParticleComponent />
      <Grid
        className={"welcome-container"}
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh", paddingTop: "calc(10vh + 3em)", position: "relative"}}
      >
        <img src={Logo} className={classes.logo} alt="Logo" />
        <Typography className={classes.title} variant={"h1"} color={"primary"}>
          Chancery
        </Typography>
        <Typography className={classes.subheading} variant={"h2"}>
          Prepare for your next investment banking interview
        </Typography>
        <Link
          to={props.isUserLoggedIn === "loggedIn" ? "/revise" : "/login"}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant={"outlined"}
            className={classes.button}
            color={"primary"}
          >
            Start Revising
          </Button>
        </Link>
        <Socials />
      </Grid>
    </Grid>
  );
}

export default Home;
