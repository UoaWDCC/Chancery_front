import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function FilterBox() {

    const topics = ["ACCOUNTING", "EV/ EQUITY VALUE", "VALUATION", "DISCOUNTED CASH FLOW", "MERGER MODEL", "LEVERAGED BUY-OUT"]; 

    const difficulties = ["EASY", "MEDIUM", "HARD"]; 

    const topicCheckBoxes = topics.map((topic) => (
        <FormControlLabel
          value={topic}
          control={<Checkbox color="primary" />}
          label={topic}
          labelPlacement="end"
          key={topic}
        />
    ));

    const difficultyCheckBoxes = difficulties.map((difficulty) => (
        <FormControlLabel
          value={difficulty}
          control={<Checkbox color="primary" />}
          label={difficulty}
          labelPlacement="end"
          key={difficulty}
        />
    ));
    
    const useStyles = makeStyles({
        heading: {
            textTransform: 'uppercase',
            fontWeight: "bold",
        }
    });

    const classes = useStyles();
    
    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel className={classes.heading} component="label">TOPICS:</FormLabel>
                <FormGroup aria-label="position" row={false}>
                {topicCheckBoxes}
                </FormGroup>
                <FormLabel className={classes.heading} component="label">DIFFICULTY:</FormLabel>
                <FormGroup aria-label="position" row={false}>
                {difficultyCheckBoxes}
                </FormGroup>
            </FormControl>
            <Button variant="text">APPLY FILTERS</Button>
        </div>                  
    )
}

export default FilterBox;