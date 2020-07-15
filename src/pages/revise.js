import React from "react";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../components/FilterBox';
import Flashcard from '../components/Flashcard';

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
                            <Flashcard/>
                        </Grid>
                        <Grid item xs={12}>
                            HOTKEYS
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}

export default Revise;