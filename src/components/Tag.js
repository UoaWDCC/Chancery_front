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
		maxWidth: '100%',
    },
    text: {
        color: "white",
        fontSize: "18px",
        textTransform: "uppercase",
        lineHeight: '30px',
        textAlign: 'left',
        marginLeft: '10px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
    },
    icon: {
        fontSize: 20,
        color: "white",
    }
}));

function Tag(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container alignItems="center" style={{flexWrap: "nowrap"}}>
                <LocalOfferIcon className={classes.icon} />
                <Typography id="topic" className={classes.text}>
                    {props.text}
                </Typography>
            </Grid>
        </div>

    )
}

export default Tag
