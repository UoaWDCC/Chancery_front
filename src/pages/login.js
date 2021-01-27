import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Logo from "../icons/Chancery_logo.png";
import TextField from "@material-ui/core/TextField";
import ParticleComponent from "../components/ParticleComponent";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: "24px",
    position: "relative",
    color: theme.palette.primary.contrastText,
  },
  button: {
    textTransform: "none",
    fontSize: "18px",
    opacity: "0.5",
    "&:hover": {
      background: "transparent",
    },
  },
  logo: {
    height: 200,
    width: 200,
  },
  background: {
    margin: "30px",
    width: "400px",
    zIndex: "1",
  },
  textbox: {
    padding: "20px 0 20px 0",
  },
  loginButton: {
    borderRadius: "10px",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontSize: "24px",
    textAlign: "center",
    textTransform: "uppercase",
    padding: "10px 0px 10px 0px",
    boxShadow: "none",

    width: "100%",
    height: "80px",

    "&:hover": {
      borderWidth: "3px",
      backgroundColor: "transparent",
      color: theme.palette.primary.main,
      boxShadow: "none",
    },
  },
  rememberMe: {
    fontSize: 18,
    color: "#969696",
  },

  icon: {
    borderRadius: 3,
    borderStyle: "solid",
    width: 16,
    height: 16,
    marginRight: "3px",
    "input:hover ~ &": {
      backgroundColor: theme.palette.type === "dark" ? "#6f6f6f" : "#e8e8e8",
    },
  },
  checkedIcon: {
    backgroundColor: "#21CE99",
    borderStyle: "solid",
    borderColor: "#1AA47A",
    "input:hover ~ &": {
      backgroundColor: "#21CE99",
    },
  },
}));

function Login(props) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  let history = useHistory();

  const onSubmit = async (data) => {
    let username = data.email;
    let password = data.password;
    try {
      await Auth.signIn(username, password);
      setError(false);
      props.updateAuthState("loggedOut");
      history.push("/revise");
    } catch (err) {
      setError(true);
    }
  };

  if (props.isUserLoggedIn === "loggedIn") {
    history.push("/revise");
  }

  return (
    <Grid
      className={"welcome-page"}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <ParticleComponent />
      <Grid
        container
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <img src={Logo} className={classes.logo} alt="Logo" />
        <br />
        <form
          style={{ width: "100%", maxWidth: "400px" }}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item>
            <Typography className={classes.label}>Email</Typography>
            <TextField
              className={classes.textBox}
              inputProps={{ style: { fontSize: 24 } }}
              inputRef={register}
              required
              error={error}
              helperText={error && "Wrong username or password"}
              fullWidth
              type={"email"}
              id="email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <br />
          <Grid item>
            <Typography className={classes.label}>Password</Typography>
            <TextField
              className={classes.textBox}
              inputProps={{ style: { fontSize: 24 } }}
              inputRef={register}
              required
              fullWidth
              type={"password"}
              id="password"
              name="password"
            />
          </Grid>
          <br />
          <Grid container item alignItems={"center"}>
            <Grid container item xs={6} justify="flex-start">
              <Typography style={{ position: "relative", fontSize: "18px" }}>
                <Link href={"/password"} style={{ color: "#969696" }}>
                  Forgot Password?
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid item>
            <Button
              className={classes.loginButton}
              type={"submit"}
              color="primary"
              variant={"outlined"}
            >
              Login
            </Button>
          </Grid>
        </form>
        <br />
        <Grid item>
          <Typography
            style={{ position: "relative", fontSize: "20px", color: "#767676" }}
          >
            Don't have an account yet? <Link href="/signup">Sign Up</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
