import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme} from "@material-ui/core/styles";
import SpaceBarIcon from "../icons/light/space.png";
import KeyboardArrowLeftIcon from "../icons/light/left.png";
import KeyboardArrowRightIcon from "../icons/light/right.png";
import SaveIcon from "../icons/light/save.png";
import SpaceBarIconDark from "../icons/dark/space.png";
import KeyboardArrowLeftIconDark from "../icons/dark/left.png";
import KeyboardArrowRightIconDark from "../icons/dark/right.png";
import SaveIconDark from "../icons/dark/save.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "18px",
  },

  information: {
    textAlign: "left",
    fontSize: "18px",
    color: "#818181",
  },
});

function HotkeyBox() {
  const theme = useTheme();
  let SpaceBar, Left, Right, Save;

   if (theme.palette.type === "dark") {
     SpaceBar = SpaceBarIconDark;
     Left = KeyboardArrowLeftIconDark;
     Right = KeyboardArrowRightIconDark;
     Save = SaveIconDark;
   } else {
     SpaceBar = SpaceBarIcon;
     Left = KeyboardArrowLeftIcon;
     Right = KeyboardArrowRightIcon;
     Save = SaveIcon;
   }


  const classes = useStyles();
  return (
    <div className={"hotkey-box"}>
      <Typography className={classes.title}>HOT KEYS:</Typography>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography className={classes.information}>
            <img src={SpaceBar} className={"hotkey-icon"} alt="Space Bar"/>
            <b>Show Answer </b> - Press spacebar to show or hide answer
          </Typography>

          <Typography className={classes.information}>
            <img src={Left} className={"hotkey-icon"} alt="Left Key"/>
            <b>Left Arrow Key </b> - Press left arrow key to go to previous
            question
          </Typography>

          <Typography className={classes.information}>
            <img src={Right} className={"hotkey-icon"} alt="Right Key"/>
            <b>Right Arrow Key </b>- Press right arrow key to go to next
            question
          </Typography>

          <Typography className={classes.information}>
            <img src={Save} className={"hotkey-icon"} alt="Save Key"/>
            <b>Save </b>- S key to save your questions for later
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default HotkeyBox;
