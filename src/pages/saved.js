import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    
})

function Saved() {
    const classes = useStyles();

    return (
        <div>
           <Container
                container
                spacing={0}
                style={{padding: '3em 10em 4em 10em', border: '2px solid black'}}
            >

                <Container style={{border: '2px solid black', height: 80}}>
                    <Typography style={{fontSize: 40, fontWeight: 'bold'}}>SAVED QUESTIONS:</Typography>
                </Container>

                <Container style={{border: '2px solid black', height: 80}}>
                    1
                </Container>

                <Container style={{border: '2px solid black', height: 80}}>
                    2
                </Container>

                <Container style={{border: '2px solid black', height: 80}}>
                    3
                </Container>

                <Container style={{border: '2px solid black', height: 80}}>
                    4
                </Container>
                
               
            </Container>
        </div>
    )
}

export default Saved;