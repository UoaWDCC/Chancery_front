import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LogoIcon from "../icons/Chancery_logo.png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(() => ({
  logo: {
    borderRadius: 7,
    height: "48px",
  },
  logoText: {
    textTransform: "uppercase",
    fontSize: "48px",
    fontWeight: "bold",
  },
  button: {
    "&:hover": {
      borderWidth: "3px",
      backgroundColor: "transparent",
      color: "#ffffff",
    },
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <Link to={"/"} style={{ textDecoration: "none" }}>
      <Button
        className={classes.button}
        startIcon={<img src={LogoIcon} className={classes.logo} alt="Logo" />}
        disableRipple
      >
        <Hidden mdDown>
          <Typography className={classes.logoText} color={"primary"}>
            Chancery
          </Typography>
        </Hidden>
      </Button>
    </Link>
  );
}

export default Logo;
