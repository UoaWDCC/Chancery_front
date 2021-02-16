import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

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
  const [confirmPasswordError, setPasswordConfirmError] = useState(false);
  const [passwordFormatError, setPasswordFormatError] = useState(false);
  const [wrongPasswordError, setWrongPasswordError] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    let newPassword = data.newPassword;
    let confirmNewPassword = data.confirmNewPassword;

    const pe = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).{8,128}$/;
    if (pe.test(newPassword)) {
      setPasswordFormatError(false);
    } else {
      setPasswordFormatError(true);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setPasswordConfirmError(true);
      return;
    } else {
      setPasswordConfirmError(false);
    }

    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(currentUser, data.currentPassword, newPassword);
      setWrongPasswordError(false);
      reset({});
      handleClickOpen();
    } catch (error) {
      setWrongPasswordError(true);
    }
  };

  if (props.isUserLoggedIn === "loggedOut") {
    history.push("/login");
  }

  return (
    <div>
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
                  error={wrongPasswordError}
                  helperText={wrongPasswordError && "Wrong current password!"}
                  inputRef={register}
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
                  error={passwordFormatError}
                  helperText={
                    passwordFormatError &&
                    "passwords needs to be longer than 8, and contains at least one large case, one lower case, and one numerical digit"
                  }
                  inputRef={register}
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
                  error={confirmPasswordError}
                  helperText={confirmPasswordError && "passwords do not match"}
                  inputRef={register}
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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your password has been reset successfully!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Settings;
