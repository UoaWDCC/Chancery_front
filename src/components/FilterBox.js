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
import Container from "@material-ui/core/Container";

const useStyles = makeStyles( theme => ({
    heading: {
        textTransform: 'uppercase',
        fontWeight: "bold",
        fontSize: '25px',
        paddingBottom: '9px',
        color: theme.palette.type === "dark" ? "#ffffff" : "#000000",
    },
    label: {
        textTransform: 'uppercase',
        fontSize: '20px',
    },
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
        marginRight: '12px',
        marginLeft: '5px',
    },
    icon: {
        borderRadius: 5,
        borderStyle: "solid",
        width: 18,
        height: 18,
        'input:hover ~ &': {
            backgroundColor: theme.palette.type === "dark" ? '#6f6f6f' : '#e8e8e8' ,
        },
    },
    checkedIcon: {
        backgroundColor: '#21CE99',
        borderStyle: "solid",
        borderColor: "#1AA47A",
        'input:hover ~ &': {
            backgroundColor: '#21CE99',
        },
    },
    filterBox: {
        backgroundColor: theme.palette.type === "dark" ? '#5F5F5F' : '#F5F5F5',
        borderRadius: '10px',
        padding: '25px',
        height: '90%',
        position: 'relative',
        minWidth: '150px',
        minHeight: '510px',
        boxShadow: theme.palette.type === "dark" ? 'none' : '0 0 5px 0 grey',
    },
    button: {
        position: "absolute",
        bottom: 20,
        left: 20,
        width: 'calc(100% - 40px)',
        padding: '10px 40px 10px 40px',
        backgroundColor: theme.palette.type === "dark" ? '#818181' : '#FFFFFF',
        boxShadow: "none",
        '&:hover': {
            boxShadow: "none",
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
            style={{padding: '8px'}}
            value={topic}
            control={<StyledCheckbox />}
            label={<Typography className={classes.label}>{topic}</Typography>}
            labelPlacement="end"
            key={topic}
        />
    ));

    const difficultyCheckBoxes = difficulties.map((difficulty) => (
        <FormControlLabel
            style={{padding: '8px'}}
            value={difficulty}
            control={<StyledCheckbox />}
            label={<Typography className={classes.label}>{difficulty}</Typography>}
            labelPlacement="end"
            key={difficulty}
        />
    ));

    return (
        <Container className={classes.filterBox}>
            <FormControl component="fieldset">

                <FormLabel  component="label" focused >
                    <Typography className={classes.heading}>
                        Topics:
                    </Typography>
                </FormLabel>

                <FormGroup aria-label="position" row={false}>
                    {topicCheckBoxes}
                </FormGroup>
                <br/>
                <FormLabel component="label" focused>
                    <Typography className={classes.heading}>
                        Difficulty:
                    </Typography>
                </FormLabel>
                <FormGroup aria-label="position" row={false}>
                    {difficultyCheckBoxes}
                </FormGroup>
                <br/>
            </FormControl>

            <Button className={classes.button}><Typography className={classes.label}>Apply Filters</Typography></Button>

        </Container>
    )
}

export default FilterBox;