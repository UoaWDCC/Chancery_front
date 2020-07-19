import React from "react";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../components/FilterBox';
import Flashcard from '../components/Flashcard';
import HotkeyBox from "../components/HotkeyBox";

function Revise() {

    const [isRendered, setHotkey] = React.useState(1); 
    const doRender = (event) => {
        setHotkey(true);
    }
    const dontRender = (event) => {
        setHotkey(false);
    }

    return (
        <div>
            <Grid
                container
                spacing={0}
                style={{ minHeight: '90vh', padding: '3em 5em 4em 5em'}}
            >
                <Grid container item justify="center">
                    <Grid container item md={12} spacing={5} justify="center">
                        <Grid item md={6} lg={3}>
                            <FilterBox/>
                        </Grid>
                       
                        <Grid container item md={12} lg={9}>

                          <Grid item xs={12}>
                                <Flashcard isRendered={isRendered} onClick={doRender} onClose={dontRender}/>
                            </Grid> 
                            
                            {isRendered ? <Grid item xs={12}> <HotkeyBox/>
                            </Grid> : <div/>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}

export default Revise;