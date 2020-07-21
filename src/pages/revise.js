import React from "react";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../components/FilterBox';
import Flashcard from '../components/Flashcard';
import HotkeyBox from "../components/HotkeyBox";
import {useSelector} from 'react-redux';

function Revise() {

    const [isRendered, setIsRendered] = React.useState(true);

    return (
        <div>
            <Grid
                container
                spacing={0}
                style={{ minHeight: '90vh', padding: '1em 5em 4em 5em'}}
            >
                <Grid container item justify="center">
                    <Grid container item md={12} spacing={5} justify="center">
                        <Grid item lg={4} xl={3}>
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
            </Grid>
        </div>

    )
}

export default Revise;