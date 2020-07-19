import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import {Link} from "react-router-dom";

const useStyles = makeStyles({

    
    title: {
        fontSize: '40px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        margin: 'auto 0',
    },
    button: {
        borderRadius: '5px',
        color: 'white',
        fontSize: '25px',
        textAlign: 'center',
        textTransform: 'uppercase',
        boxShadow: 'none',
        
        width: '350px',
        height: '80px',

        '&:hover': {
            borderWidth: '3px',
            backgroundColor: '#ffffff',
            color: '#21CE99',
            boxShadow: 'none',
        },
    },
    
})

function Saved() {
    const classes = useStyles();

    return (
        <div>
           <Container
                container
                spacing={0}
                style={{padding: '3em 3em 4em 3em', border: '2px solid black'}}
            >

                <Grid container>
                    <Grid item container xs={1}>
                    </Grid>
                    <Grid item container xs={6}>
                        <Typography className={classes.title}>Saved Questions:</Typography>
                    </Grid>
                    <Grid item container xs={5} justify="flex-end">
                        <Link to={"/revise"} style={{textDecoration: "none"}}>
                            <Button className={classes.button} color={"primary"} variant={"contained"}>Practice Now</Button>
                        </Link>
                    </Grid>

                </Grid>

                <Grid container style={{border: '2px solid red'}}>
                    <Grid item container xs={1}>
                    </Grid>
                    <Grid item container xs={11}>
                        <Typography className={classes.title}>Saved Questions:</Typography>
                    </Grid>
                </Grid>

                <Container style={{border: '2px solid black', height: 200}}>
                    2
                </Container>

                <Container style={{border: '2px solid black', height: 200}}>
                    3
                </Container>

                <Container style={{border: '2px solid black', height: 200}}>
                    4
                </Container>
                
               
            </Container>
        </div>
    )
}

export default Saved;