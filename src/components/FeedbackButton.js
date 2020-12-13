import React, { useState, useCallback } from "react";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bigContainer: {
    position: "relative",
    backgroundColor: theme.palette.type === "dark" ? "#818181" : "#F5F5F5",
    borderRadius: 10,
    height: "370px",
    width: "270px",
    marginBottom: "20px",
    padding: "13px 20px 35px 20px",
  },
  container: {
    position: "relative",
    backgroundColor: "#21CE99",
    borderRadius: 10,
    height: "60px",
    width: "60px",
    cursor: "pointer",
    float: "right",
  },
  icon: {
    height: "50%",
    width: "50%",
    color: "white",
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  smallText: {
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#606060",
    fontSize: "15px",
  },
  selectBar: {
    width: "90%",
    height: "50px",
    display: "flex",
    borderRadius: "11px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.palette.type === "dark" ? "white" : "black",
    margin: "auto",
  },
  tab: {
    flex: "0.5",
    height: "100%",
    width: "100%",
    cursor: "pointer",
    backgroundColor: theme.palette.type === "dark" ? "white" : "",
  },
  inputField: {
    width: "82%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.palette.type === "dark" ? "#ffffff" : "",
    color: theme.palette.type === "dark" ? "#ffffff" : "",
    display: "block",
    margin: "auto",
    borderRadius: 10,
    resize: "none",
    backgroundColor: theme.palette.type === "dark" ? "#5f5f5f" : "#ffffff",
    fontFamily: "inherit",
    fontSize: "inherit",
    outline: "none",
    padding: 10,
  },
  submitButton: {
    marginTop: "20px",
    paddingBottom: "4px",
    width: "90%",
    height: "47px",
    border: "none",
    borderRadius: 10,
    backgroundColor: theme.palette.type === "dark" ? "#ffffff" : "#5f5f5f",
    display: "flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  submitButtonText: {
    color: theme.palette.type === "dark" ? "#5f5f5f" : "#ffffff",
  },
}));

function FeedbackButton(props) {
  const classes = useStyles();
  const [isClicked, setIsClicked] = useState(false);
  const [isFeedback, setIsFeedback] = useState(true);

  const toggle = useCallback(() => setIsClicked(!isClicked), [
    isClicked,
    setIsClicked,
  ]);

  const toggleFeedback = useCallback(() => setIsFeedback(!isFeedback), [
    isFeedback,
    setIsFeedback,
  ]);

  return (
    <div>
      {isClicked ? (
        <div className={classes.bigContainer}>
          <p className={classes.smallText}>FEEDBACK TYPE</p>
          <div className={classes.selectBar}>
            <div
              className={classes.tab}
              style={{
                backgroundColor: isFeedback ? "#21CE99" : "",
                borderRadius: "10px 0px 0px 10px",
              }}
              onClick={toggleFeedback}
            >
              <p
                style={{
                  textAlign: "center",
                  color: isFeedback ? "white" : "black",
                }}
              >
                GENERAL
              </p>
            </div>
            <div
              className={classes.tab}
              style={{
                backgroundColor: isFeedback ? "" : "#21CE99",
                borderRadius: "0px 10px 10px 0px",
              }}
              onClick={toggleFeedback}
            >
              <p
                style={{
                  textAlign: "center",
                  color: isFeedback ? "black" : "white",
                }}
              >
                BUG
              </p>
            </div>
          </div>
          <p className={classes.smallText} style={{ marginTop: "20px" }}>
            FEEDBACK MESSAGE
          </p>
          <textarea
            className={classes.inputField}
            id="inputField"
            name="inputField"
            placeholder="Enter your feedback for CHANCERY!"
            rows="7"
          />
          <div className={classes.submitButton}>
            <p className={classes.submitButtonText}>SEND FEEDBACK</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className={classes.container} onClick={toggle}>
        {isClicked ? (
          <CloseIcon className={classes.icon} />
        ) : (
          <InsertCommentIcon className={classes.icon} />
        )}
      </div>
    </div>
  );
}

export default FeedbackButton;
