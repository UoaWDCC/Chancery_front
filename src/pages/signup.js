import React from "react";
import {useForm} from "react-hook-form"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import ParticleComponent from "../components/ParticleComponent";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: 45,
        fontWeight: "bold",
        position: "relative",
        paddingBottom: 40,
    },
    label: {
        fontSize: "24px",
        position: "relative",
    },
    form: {
        width: "100%",
        maxWidth: 500,
    },
    textBox: {
        padding: "10px 0 20px 0",
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
        margin: "40px 0 30px 0",

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

function SignUp() {
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
            style={{ minHeight: "100vh"}}
        >
            <ParticleComponent />
            <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
                <Typography variant={"h1"} className={classes.heading}>Get Started, Join Chancery!</Typography>
                <br/>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={5} item>
                        <Grid item xs={6}>
                            <Typography className={classes.label}>First Name</Typography>
                            <TextField
                                className={classes.textBox}
                                inputProps={{ style: { fontSize: 24 } }}
                                inputRef={register}
                                required
                                fullWidth
                                id="fname"
                                name="fname"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.label}>Last Name</Typography>
                            <TextField
                                className={classes.textBox}
                                inputProps={{ style: { fontSize: 24 } }}
                                inputRef={register}
                                required
                                fullWidth
                                id="lname"
                                name="lname"
                            />
                        </Grid>
                    </Grid>
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
                    <Grid item>
                        <Typography className={classes.label}>Confirm Password</Typography>
                        <TextField
                            className={classes.textBox}
                            inputProps={{ style: { fontSize: 24 } }}
                            inputRef={register}
                            required
                            fullWidth
                            type={"password"}
                            id="confirmPassword"
                            name="confirmPassword"
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            style={{position: "relative"}}
                            control={<StyledCheckbox inputRef={register} name={"remember"} value={"remember"} defaultValue={false} color={"primary"}/>}
                            label={<Typography className={classes.rememberMe}>Remember me</Typography>}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            className={classes.loginButton}
                            type={"submit"}
                            color="primary"
                            variant={"outlined"}
                        >
                            Create Account
                        </Button>
                    </Grid>
                </form>
                <Grid item>
                    <Typography style={{position: "relative", fontSize: "20px", color: "#767676"}}>
                        Already have an account? <Link href="/login">Sign In</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SignUp;