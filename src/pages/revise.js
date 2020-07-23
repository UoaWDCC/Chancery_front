import React from "react";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../components/FilterBox';
import Flashcard from '../components/Flashcard';
import HotkeyBox from "../components/HotkeyBox";

function Revise() {

    const [isRendered, setIsRendered] = React.useState(true);

    return (
        <div style={{ position: "relative", paddingTop: '10vh' }}>
            <Grid
                container
                spacing={0}
                style={{ minHeight: '90vh', padding: '3em 5em 0em 5em'}}
                justify={"center"}
            >
                <Grid container item md={12}>
                    <Grid container item lg={4} xl={3} justify="center">
                        <FilterBox/>
                    </Grid>
                    <Grid container item lg={8} xl={9}>
                        <Grid item xs={12}>
                            <Flashcard setIsRendered={setIsRendered}/>
                        </Grid>
                        {isRendered &&
                        <Grid item xs={12}>
                            <HotkeyBox/>
                        </Grid>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}

export default Revise;