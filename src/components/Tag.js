import React from "react"
import Grid from "@material-ui/core/Grid";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: "#21CE99",
        borderRadius: 5,
        padding: '4px 15px 4px 15px',
        margin: 5,
    },
    text: {
        color: "white",
        fontSize: "18px",
        textTransform: "uppercase",
        float: "left",
    },
    icon: {
        fontSize: 18,
        color: "white",
        paddingRight: 5,
    }
}))

function Tag(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container alignItems={"center"}>
                <LocalOfferIcon className={classes.icon} />
                <Typography id="topic" className={classes.text}>
                    {props.text}
                </Typography>
            </Grid>
        </div>

    )
}

export default Tag