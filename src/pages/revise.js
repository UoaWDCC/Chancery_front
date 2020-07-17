import React from "react";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../components/FilterBox';
import Flashcard from '../components/Flashcard';
import HotkeyBox from "../components/HotkeyBox";

function Revise() {

    return (
        <div>
            <Grid
                container
                spacing={0}
                style={{ minHeight: '90vh', padding: '5em'}}
            >
                <Grid container item justify="center">
                    <Grid container item md={12} spacing={5} justify="center">
                        <Grid item md={6} lg={3}>
                            <FilterBox/>
                        </Grid>
                        <Grid container item md={12} lg={9} >
                            <Grid item xs={12}>
                                <Flashcard/>
                            </Grid>
                            <Grid item xs={12}>
                                <HotkeyBox/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}

export default Revise;