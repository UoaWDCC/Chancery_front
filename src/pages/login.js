import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Logo from "../icons/Chancery_logo.png";
import clsx from "clsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import ParticleComponent from "../components/ParticleComponent";
import {useForm} from "react-hook-form";


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
      backgroundColor: "#ffffff",
      color: "#21CE99",
      boxShadow: "none",
    },
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

function StyledCheckbox(props) {
  const classes = useStyles();
  return (
      <Checkbox
          className={classes.root}
          disableRipple
          color="primary"
          checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
          icon={<span className={classes.icon} />}
          inputProps={{ "aria-label": "decorative checkbox" }}
          {...props}
      />
  );
}

function Login() {
  const classes = useStyles();
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
      <Grid
          className={"welcome-page"}
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "90vh" }}
      >
        <ParticleComponent />
        <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
          <img src={Logo} className={classes.logo} alt="Logo" />
          <br/>
          <form style={{width: '100%', maxWidth: '400px'}} noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid item>
              <Typography className={classes.label}>Email</Typography>
              <TextField
                  className={classes.textBox}
                  inputProps={{ style: { fontSize: 24 } }}
                  inputRef={register}
                  required
                  fullWidth
                  type={"email"}
                  id="email"
                  name="email"
                  autoComplete="email"
              />
            </Grid>
            <br/>
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
            <br/>
            <Grid container item alignItems={"center"}>
              <Grid item xs={6}>
                <FormControlLabel
                    style={{position: "relative"}}
                    control={<StyledCheckbox inputRef={register} name={"remember"} value={"remember"} defaultValue={false} color={"primary"}/>}
                    label={<Typography style={{ fontSize: 18}}>Remember me</Typography>}
                />
              </Grid>
              <Grid container item xs={6} justify="flex-end">
                <Typography style={{position: "relative", fontSize: "18px"}}>
                  <Link href="#">Forgot Password?</Link>
                </Typography>
              </Grid>
            </Grid>
            <br/>
            <Grid item>
              <Button
                  className={classes.loginButton}
                  type={"submit"}
                  color="primary"
                  variant={"contained"}
              >
                Login
              </Button>
            </Grid>
          </form>
          <br/>
          <Grid item>
            <Typography style={{position: "relative", fontSize: "20px"}}>
              Don't have an account yet? <Link href="/signup">Sign Up</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Login;
