import React from "react";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../components/FilterBox';
import Flashcard from '../components/Flashcard';
import HotkeyBox from "../components/HotkeyBox";

function Revise() {

    return (
            <Grid
                container
                style={{ minHeight: '100vh', padding: '15vh 7em 0em 7em'}}
                justify={"center"}
            >
                <Grid container item md={12} >
                    <Grid container item lg={4} xl={3} justify={"center"}>
                        <FilterBox/>
                    </Grid>
                    <Grid container direction={"column"} item lg={8} xl={9} alignItems={"center"}>
                        <Grid item>
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