import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../../../images/bg.png";

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: "flex",
    alignItems: 'center',
    height: "100%",
    width: "100%",
}

const Banner = () => {
    return (
        <Container>
            <Container style={bannerBg}>
                <Grid sx={{ my: 5 }} container >
                    <Grid style={{ ...verticalCenter, textAlign: "left" }} item xs={12} md={6} >
                        <Box>
                            <Typography variant="h4">
                                <span style={{ color: "blue", fontWeight: "bold" }}>Lifeline</span> combines advanced science,<br />
                                expertise and passion to solve the world’s most serious health issues.
                                <br /> Booking Here
                            </Typography>
                            <Link style={{ textDecoration: "none" }} to="/appointment">
                                <Button style={{ backgroundColor: "#fcff33", padding: "6px", borderRadius: "4px", marginTop: "15px" }}>Get Appointment</Button>
                            </Link>
                            <Typography variant="h6" sx={{ my: 5, fontWeight: 300, color: 'gray' }} style={{ fontWeight: "300", fontSize: "300" }}>
                                We encourage all LGBTQ+ colleagues to bring their whole, authentic selves to work.
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid style={verticalCenter} item xs={12} md={5}>
                        <img style={{ width: "500px", height: "500px" }} src="https://i.ibb.co/SvMrsv7/life-Line-banner.jpg" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Container >

    );
};

export default Banner;