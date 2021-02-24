import React from "react";
import { Instagram, Facebook, LinkedIn, Email } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  icon: {
    fontSize: "45px",
    color: "grey",
    transition: "all 0.2s",
    margin: "5px",

    "&:hover": {
      color: theme.palette.primary.main,
      fontSize: "52px",
      cursor: "pointer",
    },
  },
  instagramIcon: {
    fontSize: "43px",
  },
  emailIcon: {
    fontSize: "49px",
    marginBottom: "3px",

    "&:hover": {
      fontSize: "54px",
    },
  },
}));

function Socials() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link href="https://www.instagram.com/chancery.app/" target={"__blank"}>
        <Instagram className={clsx(classes.icon, classes.instagramIcon)} />
      </Link>
      <Link href="https://www.facebook.com/Chancery-109175661220313" target={"__blank"}>
        <Facebook className={classes.icon} />
      </Link>
      <Link href="https://www.linkedin.com/company/chanceryapp/about/" target={"__blank"}>
        <LinkedIn className={classes.icon} />
      </Link>
      <Link href="mailto: chancery@gmail.com" target={"__blank"}>
        <Email className={clsx(classes.icon, classes.emailIcon)} />
      </Link>
    </div>
  );
}

export default Socials;
