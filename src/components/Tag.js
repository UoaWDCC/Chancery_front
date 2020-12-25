import React from "react";
import Grid from "@material-ui/core/Grid";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
    backgroundColor: "#21CE99",
    borderRadius: 5,
    padding: "5px 15px 35px 10px",
    margin: "5px",
    height: "30px",
    maxWidth: "100%",
  },
  text: {
    color: "white",
    fontSize: "18px",
    textTransform: "uppercase",
    lineHeight: "30px",
    textAlign: "left",
    marginLeft: "25px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  icon: {
    position: "absolute",
    top: "9px",
    fontSize: 20,
    color: "white",
    paddingRight: 5,
  },
  "@media (max-width: 960px)": {
    text: {
      marginLeft: "5px",
    },
  },
}));

function Tag(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container>
        <Hidden smDown>
          <LocalOfferIcon className={classes.icon} />
        </Hidden>
        <Typography id="topic" className={classes.text}>
          {props.text}
        </Typography>
      </Grid>
    </div>
  );
}

export default Tag;
