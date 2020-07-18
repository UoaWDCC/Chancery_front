import { createMuiTheme } from '@material-ui/core/styles';
import React from "react";

const theme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            light: '#21CE99',
            main: '#21CE99',
            dark: '#21CE99',
        },
        secondary: {
            main: '#000000',
            light: '#F5F5F5',
            dark: '#5F5F5F'
        },
    },
})

export default theme;