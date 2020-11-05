import React from "react";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../components/FilterBox';
import Flashcard from '../components/Flashcard';
import HotkeyBox from "../components/HotkeyBox";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh' - theme.spacing(5),
        padding: '102px 1em 0em',
		maxWidth: '2560px',
		margin: '0 auto',
    }
}));

function Revise() {
    const classes = useStyles();

    return (
            <Grid
                container
                className={classes.root}
                justify={"center"}
            >
                <Grid container item md={12} spacing={5}>
                    <Grid container item lg={4} xl={3} justify={"center"} alignItems={"start"}>
						<div>
                        	<FilterBox/>
						</div>
                    </Grid>
                    <Grid container direction={"column"} item lg={8} xl={9} alignItems={"center"}>
                        <Grid item style={{width: '100%'}}>
                            <Flashcard/>
                        </Grid>
                        <Grid item>
                            <HotkeyBox/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

    )
}

export default Revise;
