import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Service from './Service';


const services = [
    {
        name: "Fluoride Treatment",
        description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride",
        image: "https://i.ibb.co/3YR23tg/fluoride.png"
    },
    {
        name: "Cavity Filling",
        description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride",
        image: "https://i.ibb.co/gy82qqm/cavity.png"
    },
    {
        name: "Teath Whitening",
        description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride",
        image: "https://i.ibb.co/2hxmDSB/whitening.png"
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5, textAlign: "center" }}>
            <Typography variant="h6" color="#00b0ff" sx={{ fontWeight: 600 }}>
                OUR SERVICES
            </Typography>
            <Typography Typography variant="h4" sx={{ fontWeight: 600 }}>
                Services We Provide
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map((service, index) => (
                            <Service
                                key={index}
                                service={service}></Service>
                        ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;