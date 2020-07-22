import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../components/FilterBox';
import Flashcard from '../components/Flashcard';
import HotkeyBox from "../components/HotkeyBox";
import { useMediaQuery } from 'react-responsive'
import Fab from "@material-ui/core/Fab";
import FilterListIcon from "@material-ui/icons/FilterList";
import Dialog from "@material-ui/core/Dialog";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( theme =>({
    filterButton: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}))

function Revise() {
    const classes = useStyles();
    const [isRendered, setIsRendered] = React.useState(true);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
    const [open, setOpen] = useState(false);

    function SimpleDialog(props) {
        const { onClose, selectedValue, open } = props;

        const handleClose = () => {
            onClose(selectedValue);
        };

        return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <FilterBox/>
            </Dialog>
        );
    }

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Grid
                container
                spacing={0}
                style={{ minHeight: '90vh', padding: '1em 5em 4em 5em'}}
            >
                <Grid container item justify="center">
                    <Grid container item md={12} spacing={5} justify="center">
                        <Grid container item lg={4} xl={3} justify="center">
                            {!isTabletOrMobile && <FilterBox/>}
                        </Grid>

                        <Grid container item lg={8} xl={9}>

                            <Grid item xs={12}>
                               <Flashcard setIsRendered={setIsRendered}/>
                            </Grid>
                            {isRendered && !isTabletOrMobile &&
                                <Grid item xs={12}>
                                    <HotkeyBox/>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                {isTabletOrMobile &&
                <Fab className={classes.filterButton} onClick={handleClick}>
                    <FilterListIcon/>
                </Fab>}
                <SimpleDialog open={open} onClose={handleClick} />
            </Grid>
        </div>

    )
}

export default Revise;