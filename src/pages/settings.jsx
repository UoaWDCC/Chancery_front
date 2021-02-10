import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    paddingTop: "calc(10vh + 3em)",
  },
  header: {
    fontSize: "36px",
    textTransform: "uppercase",
    marginBottom: "20px",
    fontWeight: 600,
  },
  subHeader: {
    fontSize: "30px",
    marginBottom: "25px",
    fontWeight: 600,
  },
  content: {
    width: "70vw",
  },
  container: {
    background: theme.palette.background.default,
    borderRadius: "10px",
    padding: "50px",
    boxShadow: theme.boxShadow,
    width: "100%",
  },
  label: {
    fontSize: "24px",
  },
  textBox: {
    padding: "20px 0",
    width: "100%",
  },
  update: {
    background: "black",
    color: "white",
    borderRadius: "10px",
    fontSize: "24px",
    textAlign: "center",
    textTransform: "uppercase",
    padding: "20px 30px",

    "&:hover": {
      color: "black",
    },
  },
  [theme.breakpoints.down("md")]: {
    header: {
      fontSize: "24px",
    },
    subHeader: {
      fontSize: "20px",
    },
    content: {
      width: "90vw",
    },
    label: {
      fontSize: "16px",
    },
    update: {
      fontSize: "16px",
    },
  },
}));

function Settings(props) {
  const classes = useStyles();
  let history = useHistory();
  const { handleSubmit } = useForm();

  const onSubmit = async (data) => {
    //TODO update password
  };

  if (props.isUserLoggedIn === "loggedOut") {
    history.push("/login");
  }

  return (
    <Grid
      container
      className={classes.root}
      direction={"column"}
      alignItems={"center"}
    >
      <Grid item container className={classes.content}>
        <Grid item>
          <Typography className={classes.header}>
            My account settings
          </Typography>
        </Grid>
        <Grid item className={classes.container}>
          <Typography className={classes.subHeader}>
            Change Your Password
          </Typography>

          <form
            style={{ width: "100%", maxWidth: "500px" }}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid item>
              <Typography className={classes.label}>
                Current Password
              </Typography>
              <TextField
                className={classes.textBox}
                inputProps={{ style: { fontSize: 24 } }}
                required
                type={"password"}
                id="currentPassword"
                name="currentPassword"
              />
            </Grid>
            <br />
            <Grid item>
              <Typography className={classes.label}>New Password</Typography>
              <TextField
                className={classes.textBox}
                inputProps={{ style: { fontSize: 24 } }}
                required
                type={"password"}
                id="newPassword"
                name="newPassword"
              />
            </Grid>
            <br />
            <Grid item>
              <Typography className={classes.label}>
                Confirm New Password
              </Typography>
              <TextField
                className={classes.textBox}
                inputProps={{ style: { fontSize: 24 } }}
                required
                type={"password"}
                id="confirmNewPassword"
                name="confirmNewPassword"
              />
            </Grid>
            <br />
            <Grid item>
              <Button className={classes.update} type={"submit"}>
                Update Password
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Settings;
