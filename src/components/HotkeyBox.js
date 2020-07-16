import React from "react";
import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles({
    title: {
        textTransform: 'uppercase',
        fontWeight: "bold",
        paddingBottom: '7px',
        textAlign: "center",
    }, 

    information: {
        textAlign: "left",
        fontSize: "12px",
    }
});

function HotkeyBox() {
    const classes = useStyles();
    return (
      <div className={"hotkey-box"}>
        <Typography className={classes.title}>HOT KEYS:</Typography>
        
        <Typography className={classes.information}>
            <SpaceBarIcon className={"hotkey-icon"} fontSize={"small"}/>
            Show Answer - Press spacebar to show or hide answer
        </Typography>

        <Typography className={classes.information}>
            <KeyboardArrowLeftIcon className={"hotkey-icon"} fontSize={"small"}/>
            Left Arrow Key - Press left arrow key to go to previous question
        </Typography>

        <Typography className={classes.information}>
            <KeyboardArrowRightIcon className={"hotkey-icon"} fontSize={"small"}/>
            Right Arrow Key - Press right arrow key to go to next question
        </Typography>

        <Typography className={classes.information}>
            <BookmarkIcon className={"hotkey-icon"} fontSize={"small"}/>
            Save - S key to save your questions for later
        </Typography>
          
      </div>  
    );
}

export default HotkeyBox;