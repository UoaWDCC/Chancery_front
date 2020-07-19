import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";

import BookmarkTwoToneIcon from '@material-ui/icons/BookmarkTwoTone';

const useStyles = makeStyles({
    title: {
        fontSize: '40px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: '20px',
    },
    flashcardBackground: {
        backgroundColor: '#F5F5F5',
        borderRadius: '10px',
        boxShadow: '0 0 5px 0 grey',
        padding: '20px 40px 20px 40px',
    },
    subheading: {
        fontWeight: 'bold',
        fontSize: '40px',
        textTransform: 'uppercase',
        display: 'inline-block',
    }, 
    questionContainer: {
        padding: '0px',
        minHeight: '100px',
        display: 'flex',
      },
    questionContent: {
        fontWeight: 'bold',
        fontSize: '25px',
        display: 'inline-block',
        marginTop: '12.5px',
    },
    save: {
        filter: 'invert(62%) sepia(94%) saturate(364%) hue-rotate(108deg) brightness(89%) contrast(91%)',
        '&:hover': {
            background: 'none',
            borderColor: '#21CE99',
            color: '#21CE99',
            marginTop: '5px',
        },
    },
    answerContainer: {
        padding: '0px',
        display: 'flex',
      },   
    answerContent: {
        fontSize: '20px',
        display: 'inline-block',
        marginTop: '10px',
        lineHeight: '40px',
    },
    showButton: {
        backgroundColor: 'white',
        borderRadius: '5px',
        color: '#818181',
        fontSize: '20px',
        textAlign: 'center',
        textTransform: 'uppercase',
        padding: '10px 0px 10px 0px',
        boxShadow: 'none',
        border: '1px solid #818181',

        margin: '15px 0 15px 83px',

        width: '210px',

        '&:hover': {
            backgroundColor: '#B1B1B1',
            color: 'white',
            boxShadow: 'none',
        },
    },
    
      
})


function SavedFooter() {


    return (
        <div>
        </div>
    )
}

export default SavedFooter;

