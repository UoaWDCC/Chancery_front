import React from "react";
import Grid from "@material-ui/core/Grid";
import FilterBox from "../components/FilterBox";
import Flashcard from "../components/Flashcard";
import HotkeyBox from "../components/HotkeyBox";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    padding: "calc(10vh + 3em) 10vw 0em",
  },
}));

function Revise() {
  const classes = useStyles();
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Grid container className={classes.root} justify={"center"}>
      <Grid
        container
        style={{
          height: "100%",
          flexDirection: matches ? "row" : "column-reverse",
        }}
        item
        spacing={10}
      >
        {/* <Hidden mdDown> */}
        <Grid item>
          <FilterBox />
        </Grid>
        {/* </Hidden> */}
        <Grid
          container
          item
          direction={"column"}
          alignItems={"center"}
          style={{ flex: 1 }}
        >
          <Grid item style={{ width: "100%" }}>
            <Flashcard />
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
