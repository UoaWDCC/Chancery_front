import React from "react";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../components/FilterBox';

function Revise() {

    return (
        <div>

            <Grid container spacing={1}>
                <Grid item xs={3} className="filter-box">
                    <FilterBox/>
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            FLASHCARD
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