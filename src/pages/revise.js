import React from "react";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../components/FilterBox';
import HotkeyBox from '../components/HotkeyBox';

function Revise() {

    return (
        <div>
            <Grid container justify="center" alignItems="center">
                <Grid item container xs={12} sm={10} spacing={10} justify="center">
                    <Grid item md={4} lg={3}>
                        <FilterBox/>
                    </Grid>
                    <Grid container item md={8} lg={7}>
                        <Grid item xs={12}>
                            FLASHCARD
                        </Grid>
                        <Grid xs={3}/>
                        <Grid item xs={6}>
                            <HotkeyBox/>
                        </Grid>
                        <Grid xs={3}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}

export default Revise;