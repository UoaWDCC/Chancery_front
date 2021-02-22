import React from "react";
import Grid from "@material-ui/core/Grid";
import FilterBox from "../components/FilterBox";
import Flashcard from "../components/Flashcard";
import HotkeyBox from "../components/HotkeyBox";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    paddingTop: "calc(10vh + 3em)",
  },
}));

function Revise(props) {
  const classes = useStyles();
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  let history = useHistory();

  if(props.isUserLoggedIn === "loggedOut"){
    history.push('/login')
  }

  return (
    <Grid container className={classes.root} justify={"center"}>
      <Grid
        container
        style={{
          margin: "0 5vw",
          flexDirection: matches ? "row" : "column-reverse",
        }}
        item
        spacing={10}
      >
        <Grid item>
          <FilterBox />
        </Grid>
        <Grid
          container
          item
          direction={"column"}
          alignItems={"center"}
          style={{ flex: 1 }}
        >
          <Grid item style={{ width: "100%" }}>
            <Flashcard user={props.user}/>
          </Grid>
          <Hidden xsDown>
            <Grid item>
              <HotkeyBox />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Revise;
