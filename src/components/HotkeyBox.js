import React from "react";
import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    title: {
        textTransform: 'uppercase',
        fontWeight: "bold",
        paddingBottom: '14px',
        textAlign: "center",
    }, 

    information: {
        textAlign: "left",
        fontSize: "12px",
        paddingBottom: "3px",
        color: "#818181",
    }
});

function HotkeyBox() {
    const classes = useStyles();
    return (
      <div className={"hotkey-box"}>
        <Typography className={classes.title}>HOT KEYS:</Typography>
          <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
          >
              <Grid item>
                  <Typography className={classes.information}>
                      <SpaceBarIcon className={"hotkey-icon"} fontSize={"small"}/>
                      <b>Show Answer </b> - Press spacebar to show or hide answer
                  </Typography>

                  <Typography className={classes.information}>
                      <KeyboardArrowLeftIcon className={"hotkey-icon"} fontSize={"small"}/>
                      <b>Left Arrow Key </b> - Press left arrow key to go to previous question
                  </Typography>

                  <Typography className={classes.information}>
                      <KeyboardArrowRightIcon className={"hotkey-icon"} fontSize={"small"}/>
                      <b>Right Arrow Key </b>- Press right arrow key to go to next question
                  </Typography>

                  <Typography className={classes.information}>
                      <BookmarkIcon className={"hotkey-icon"} fontSize={"small"}/>
                      <b>Save </b>- S key to save your questions for later
                  </Typography>
              </Grid>
          </Grid>
      </div>  
    );
}

export default HotkeyBox;