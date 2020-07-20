import React from "react";
import Particles from "react-particles-js";
import useTheme from "@material-ui/core/styles/useTheme";

function ParticleComponent() {
    const theme = useTheme();

    return (
        <div
            style={{
                position: "absolute",
                top: "10vh",
                left: 0,
                width: "100%",
                // height: "100%"
            }}
        >
            <Particles
                height={"89vh"}
                params={{
                    particles: {
                        color: {
                            value: theme.palette.primary.main
                        },
                        line_linked: {
                            color: {
                                value: theme.palette.primary.main
                            }
                        },
                        number: {
                            value: 100
                        },
                        size: {
                            value: 3
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            }
                        }
                    }
                }}
            />
        </div>
    );
}

export default ParticleComponent;