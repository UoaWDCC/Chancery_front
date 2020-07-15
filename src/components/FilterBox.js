import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import clsx from 'clsx';

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
    },
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: 3,
        width: 20,
        height: 20,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,224,213,0.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#21CE99',
        'input:hover ~ &': {
            backgroundColor: '#21CE99',
        },
    }
});

function StyledCheckbox(props) {
    const classes = useStyles();

    return (
        <Checkbox
            className={classes.root}
            disableRipple
            color="primary"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            inputProps={{ 'aria-label': 'decorative checkbox' }}
            {...props}
        />
    );
}

function FilterBox() {
    const classes = useStyles();
    const topics = ["Accounting", "EV / Equity Value", "Valuation", "Discounted Cash Flow", "Merger Model", "Leveraged buy-out"];
    const difficulties = ["Easy", "Medium", "Hard"];

    const topicCheckBoxes = topics.map((topic) => (
        <FormControlLabel
            value={topic}
            control={<StyledCheckbox />}
            label={<Typography className={classes.label}>{topic}</Typography>}
            labelPlacement="end"
            key={topic}
        />
    ));

    const difficultyCheckBoxes = difficulties.map((difficulty) => (
        <FormControlLabel
            className={classes.label}
            value={difficulty}
            control={<StyledCheckbox />}
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