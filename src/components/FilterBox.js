import React, { useState, useEffect, useRef } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import {
  updateSelectedTopics,
  updateSelectedDifficulties,
} from "../redux/actions";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles( theme => ({
    heading: {
        textTransform: 'uppercase',
        fontWeight: "bold",
        fontSize: '25px',
        paddingBottom: '5px',
        color: theme.palette.primary.contrastText,
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
    },
    icon: {
        borderRadius: 5,
        borderStyle: "solid",
        width: 20,
        height: 20,
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
        backgroundColor: theme.palette.background.default,
        borderRadius: '10px',
        height: '760px',
        width: '365px',
        boxShadow: theme.palette.type === "dark" ? 'none' : '0 0 5px 0 grey',
    },
    button: {
        width: 310,
        borderRadius: 7,
        padding: '20px 40px 20px 40px',
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
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

function FilterBox() {
  const classes = useStyles();
  const loaded = useRef(false);
  const dispatch = useDispatch();

  const topics = [
    "Accounting",
    "EV / Equity Value",
    "Valuation",
    "Discounted Cash Flow",
    "Merger Model",
    "Leveraged buy-out",
  ];
  const difficulties = ["Easy", "Medium", "Hard"];

  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);

  const applyTopicFilters = (event, topic) => {
    topic = topic === "Leveraged buy-out" ? "LBO" : topic; // backend stores Leveraged buyout as "LBO"
    event.target.checked
      ? setSelectedTopics(selectedTopics.concat(topic))
      : setSelectedTopics(
          selectedTopics.filter((selectedTopic) => selectedTopic !== topic)
        );
  };

  const applyDifficultyFilters = (event, difficulty) => {
    // event.target.checked
    //   ? setSelectedDifficulties(selectedDifficulties.concat(difficulty))
    //   : setSelectedDifficulties(
    //       selectedDifficulties.filter(
    //         (selectedDifficulty) => selectedDifficulty !== difficulty
    //       )
    //     );
  };

  const clearFilters = () => {
    //TODO: to be implemented
    console.log("clearing filters");
  };

  useEffect(() => {
    if (loaded.current) {
      dispatch(updateSelectedTopics(selectedTopics));
    } else {
      loaded.current = true;
    }
  }, [selectedTopics]);

  useEffect(() => {
    if (loaded.current) {
      dispatch(updateSelectedDifficulties(selectedDifficulties));
    } else {
      loaded.current = true;
    }
  }, [selectedDifficulties]);

  const topicCheckBoxes = topics.map((topic) => (
    <FormControlLabel
      style={{ padding: "6px" }}
      value={topic}
      control={<StyledCheckbox />}
      label={<Typography className={classes.label}>{topic}</Typography>}
      labelPlacement="end"
      key={topic}
      onChange={(event) => applyTopicFilters(event, topic)}
    />
  ));

  const difficultyCheckBoxes = difficulties.map((difficulty) => (
    <FormControlLabel
      style={{ padding: "6px" }}
      value={difficulty}
      control={<StyledCheckbox />}
      label={<Typography className={classes.label}>{difficulty}</Typography>}
      labelPlacement="end"
      key={difficulty}
      onChange={(event) => applyDifficultyFilters(event, difficulty)}
    />
  ));

  return (
      <Grid
          className={classes.filterBox}
          container
          direction="column"
          justify="center"
          alignItems="center"
      >
          <Grid item style={{paddingLeft: 20}}>
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
          </Grid>
          <Grid item>
              <Button className={classes.button}><Typography className={classes.label}>Clear Filters</Typography></Button>
          </Grid>

      </Grid>
  )
}

export default FilterBox;
