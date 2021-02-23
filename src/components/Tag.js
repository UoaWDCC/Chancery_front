import React from "react";
import Grid from "@material-ui/core/Grid";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    backgroundColor: "#21CE99",
    borderRadius: 5,
    padding: "4px 13px 4px 9px",
    margin: "5px",
    height: "30px",
    maxWidth: "100%",
  },
  text: {
    color: "white",
    fontSize: "15px",
    textTransform: "uppercase",
    lineHeight: "30px",
    textAlign: "left",
    marginLeft: "10px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  icon: {
    fontSize: "18px",
    color: "white",
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      padding: "0 8px",
    },
    icon: {
      fontSize: "13px",
    },
    text: {
      fontSize: "13px",
    },
  },
}));

function Tag(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container alignItems="center" style={{ flexWrap: "nowrap" }}>
        <LocalOfferIcon className={classes.icon} />
        <Typography id="topic" className={classes.text}>
          {props.text}
        </Typography>
      </Grid>
    </div>
  );
}

export default Tag;
