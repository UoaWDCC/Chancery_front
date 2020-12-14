import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ParticleComponent from "../components/ParticleComponent";
import {useForm} from "react-hook-form";

// Modules, e.g. Webpack:
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

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
      color: 'white',
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

function Password() {
    const classes = useStyles();

    const [success, handleSuccess] = useState(false);
    const [userEmail, handleEmail] = useState("");

    const {register, handleSubmit} = useForm();

    var poolData = {
      UserPoolId: "ap-southeast-2_9hmZTBuah",
      ClientId: "3u8dhsro0i2igvhuvbl461eenv",
    };

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


    var user;

    const onSubmit = (data) => {
      user = new AmazonCognitoIdentity.CognitoUser({
        Username: data.email,
        Pool: userPool,
      });

      handleEmail(data.email)

      if(user){
        user.forgotPassword({
          onSuccess: function(data){
            console.log(data);
            handleSuccess(true);
          },
          onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
          },
          inputVerificationCode: function(data) {
            handleSuccess(true);
            console.log("Input code: ", data);
          }
        })
      }

      
    };

    const passwordConfirming = (data) => {

      var code = data.code;
      var newPassword = data.confirmPassword;

      user = new AmazonCognitoIdentity.CognitoUser({
        Username: userEmail,
        Pool: userPool,
      });

      user.confirmPassword(code, newPassword, {
        onSuccess() {
          console.log("Yes");
        },
        onFailure(err) {  
          console.log(err)
        }
      })
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
          <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
              <form style={{width: '100%', maxWidth: '400px'}} noValidate onSubmit={handleSubmit(onSubmit)}>
                {!success && (
                  <div>
                    <Grid item>
                    <Typography className={classes.label}>Please fill in your email</Typography>
                    <br/>
                    <TextField 
                        className={classes.textBox}
                        inputProps={{ style: { fontSize: 24 } }}
                        inputRef={register}
                        required
                        fullWidth
                        type={"email"}
                        id="email"
                        name="email"
                    />
                    </Grid>
                    <br/>
                    
                      <Grid item>
                      <Button
                          className={classes.loginButton}
                          type={"submit"}
                          color="primary"
                          variant={"outlined"}
                      >
                          Submit
                      </Button>
                      </Grid>
                    </div>
                  )}
              </form>

              <form style={{width: '100%', maxWidth: '400px'}} noValidate onSubmit={handleSubmit(passwordConfirming)}>
                  {success && (
                    <div>
                    <Grid item>
                      <Typography className={classes.label}>Please fill in your verification code</Typography>
                      <br/>
                      <TextField 
                          className={classes.textBox}
                          inputProps={{ style: { fontSize: 24 } }}
                          inputRef={register}
                          required
                          fullWidth
                          type={"code"}
                          id="code"
                          name="code"
                      />
                    </Grid>
                    <br/>
                    <Grid item>
                      <Typography className={classes.label}>Confirm new Password</Typography>
                      <br/>
                      <TextField 
                          className={classes.textBox}
                          inputProps={{ style: { fontSize: 24 } }}
                          inputRef={register}
                          required
                          fullWidth
                          type={"confirmPassword"}
                          id="confirmPassword"
                          name="confirmPassword"
                      />
                    </Grid>
                    <br/>
                    <Grid item>
                      <Button
                          className={classes.loginButton}
                          type="submit"
                          color="primary"
                          variant={"outlined"}
                      >
                          Submit
                      </Button>
                      </Grid>
                    </div>
                  )}
          </form>

              
          </Grid>
      </Grid>
    )
    

}

export default Password;