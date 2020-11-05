import React from "react"
import Grid from "@material-ui/core/Grid";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    container: {
        position: 'relative',
        backgroundColor: "#21CE99",
        borderRadius: 5,
        padding: '5px 15px 5px 10px',
        margin: '5px',
        height: '30px',
    },
    text: {
        color: "white",
        fontSize: "18px",
        textTransform: "uppercase",
        lineHeight: '30px',
        textAlign: 'left',
        marginLeft: '25px',
    },
    icon: {
        position: 'absolute',
        top: '9px',
        fontSize: 20,
        color: "white",
        paddingRight: 5,
    }
}));

function Tag(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container>
                <LocalOfferIcon className={classes.icon} />
                <Typography id="topic" className={classes.text}>
                    {props.text}
                </Typography>
            </Grid>
        </div>

    )
}

export default Tag
