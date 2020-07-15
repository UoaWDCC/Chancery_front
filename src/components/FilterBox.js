import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    heading: {
        textTransform: 'uppercase',
        fontWeight: "bold",
        paddingBottom: '7px',
    },
    label: {
        textTransform: 'uppercase',
        fontSize: '14px',
    },
    button: {
        margin: "auto",
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '40px',
        paddingLeft: '40px',
        backgroundColor: '#ffffff',
        boxShadow: "none",
        '&:hover': {
            boxShadow: "none",
        },
    }
});


function FilterBox() {
    const classes = useStyles();
    const topics = ["Accounting", "EV /Equity Value", "Valuation", "Discounted Cash Flow", "Merger Model", "Leveraged buy-out"];
    const difficulties = ["Easy", "Medium", "Hard"];

    const topicCheckBoxes = topics.map((topic) => (
        <FormControlLabel
            value={topic}
            control={<Checkbox color="primary" />}
            label={<Typography className={classes.label}>{topic}</Typography>}
            labelPlacement="end"
            key={topic}
        />
    ));

    const difficultyCheckBoxes = difficulties.map((difficulty) => (
        <FormControlLabel
            className={classes.label}
            value={difficulty}
            control={<Checkbox color="primary" />}
            label={<Typography className={classes.label}>{difficulty}</Typography>}
            labelPlacement="end"
            key={difficulty}
        />
    ));

    return (
        <div className={"filter-box"}>
            <FormControl component="fieldset">
                <FormLabel className={classes.heading} component="label" focused color={"secondary"}>TOPICS:</FormLabel>
                <FormGroup aria-label="position" row={false}>
                    {topicCheckBoxes}
                </FormGroup>
                <br/>
                <FormLabel className={classes.heading} component="label" focused color={"secondary"}>DIFFICULTY:</FormLabel>
                <FormGroup aria-label="position" row={false}>
                    {difficultyCheckBoxes}
                </FormGroup>
                <br/>
            </FormControl>

            <Button variant="contained" className={classes.button}><Typography className={classes.label}>Apply Filters</Typography></Button>

        </div>
    )
}

export default FilterBox;