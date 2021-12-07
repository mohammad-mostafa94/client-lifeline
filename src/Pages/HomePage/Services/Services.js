import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Service from './Service';


const services = [
    {
        name: "Aged Care",
        description: "If you or your family have moved address, need to change a representative or perhaps someone has passed away, please let us know.",
        image: "https://i.ibb.co/GMbDQYH/aged-care.jpg"
    },
    {
        name: "Mental Healthcare",
        description: "The public health system reaches the population by extending government, private, and. NGO-sponsored health care providers, hospitals, health centers ",
        image: "https://i.ibb.co/SmF2rrM/Mental-Healthcare.jpg"
    },
    {
        name: "Mental Portal",
        description: "Mental Portal brings data on a comprehensive set of indicators relevant to technical programs from the Department of Noncommunicable ",
        image: "https://i.ibb.co/8zgw9zX/Mental-Portal.jpg"
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5, textAlign: "center" }}>
            <Typography variant="h6" color="#00b0ff" sx={{ fontWeight: 600 }}>
                OUR SERVICES
            </Typography>
            <Typography color="#fcff33" Typography variant="h4" sx={{ fontWeight: 600 }}>
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