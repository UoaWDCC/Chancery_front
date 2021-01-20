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
import { updateFilters } from "../redux/actions";
import Grid from "@material-ui/core/Grid";
import * as constants from "../redux/constants";

const useStyles = makeStyles((theme) => ({
  heading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "25px",
    paddingBottom: "5px",
    color: theme.palette.primary.contrastText,
  },
  label: {
    textTransform: "uppercase",
    fontSize: "20px",
  },
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginRight: "12px",
  },
  icon: {
    borderRadius: 5,
    borderStyle: "solid",
    width: 20,
    height: 20,
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
  filterBox: {
    backgroundColor: theme.palette.background.default,
    borderRadius: "10px",
    height: "760px",
    width: "365px",
    boxShadow: theme.palette.type === "dark" ? "none" : "0 0 5px 0 grey",
  },
  button: {
    width: 310,
    borderRadius: 7,
    padding: "20px 40px 20px 40px",
    backgroundColor: theme.palette.type === "dark" ? "#818181" : "#FFFFFF",
    boxShadow: "none",
    "&:hover": {
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
    constants.ACCOUNTING,
    constants.EV_EQUITY_VALUE,
    constants.VALUATION,
    constants.DISCOUNTED_CASH_FLOW,
    constants.MERGER_MODEL,
    constants.LEVERAGED_BUY_OUT,
  ];
  const difficulties = [constants.EASY, constants.MEDIUM, constants.HARD];

  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const initialCheckboxStates = {};

  topics.forEach(topic => {
    initialCheckboxStates[topic] = false;
  });

  difficulties.forEach(difficulty => {
    initialCheckboxStates[difficulty] = false;
  });

  const [checkedStates, setCheckedStates] = useState(initialCheckboxStates);

  const applyTopicFilters = (event, topic) => {
    setCheckedStates({...checkedStates, [topic]: event.target.checked});
    event.target.checked
      ? setSelectedTopics(selectedTopics.concat(topic))
      : setSelectedTopics(
          selectedTopics.filter((selectedTopic) => selectedTopic !== topic)
        );
    event.target.blur();
  };

  const applyDifficultyFilters = (event, difficulty) => {
    setCheckedStates({...checkedStates, [difficulty]: event.target.checked});
    event.target.checked
      ? setSelectedDifficulties(selectedDifficulties.concat(difficulty))
      : setSelectedDifficulties(
          selectedDifficulties.filter(
            (selectedDifficulty) => selectedDifficulty !== difficulty
          )
        );
    event.target.blur();
  };

  const clearFilters = () => {
    setCheckedStates(initialCheckboxStates);
    setSelectedDifficulties([]);
    setSelectedTopics([]);
  };

  useEffect(() => {
    if (loaded.current) {
      dispatch(updateFilters(selectedTopics, selectedDifficulties));
    } else {
      loaded.current = true;
    }
  }, [selectedTopics, selectedDifficulties, dispatch]);
  
  const topicCheckBoxes = topics.map((topic) => (
    <FormControlLabel
      style={{ padding: "6px" }}
      value={topic}
      control={<StyledCheckbox checked={checkedStates[topic]}/>}
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
      control={<StyledCheckbox checked={checkedStates[difficulty]}/>}
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
      <Grid item style={{ paddingLeft: 20 }}>
        <FormControl component="fieldset">
          <FormLabel component="label" focused>
            <Typography className={classes.heading}>Topics:</Typography>
          </FormLabel>

          <FormGroup aria-label="position" row={false}>
            {topicCheckBoxes}
          </FormGroup>
          <br />
          <FormLabel component="label" focused>
            <Typography className={classes.heading}>Difficulty:</Typography>
          </FormLabel>
          <FormGroup aria-label="position" row={false}>
            {difficultyCheckBoxes}
          </FormGroup>
          <br />
        </FormControl>
      </Grid>
      <Grid item>
        <Button className={classes.button} onClick={clearFilters}>
          <Typography className={classes.label}>Clear Filters</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default FilterBox;
