import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: "rgba(45,58, 74,0.8)",
    margin: "40px 0",
    backgroundBlendMode: "darken, luminosity"
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Box sx={
                {
                    flexGrow: 1,
                    display: 'flex',
                }}>
                <Grid style={appointmentBg} container spacing={2}>
                    <Grid item xs={12} md={6}  >
                        <img style={{ width: "500px", marginTop: "-130px" }} src={doctor} alt="" />;
                    </Grid>
                    <Grid sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        textAlign: "left"
                    }} item xs={12} md={6}>
                        <Box>
                            <Typography Typography variant="h4"
                                style={{ color: "#00b0ff" }}>
                                Appointment </Typography>

                            <Typography variant="h4" style={{ margin: "45px 0", fontWeight: "700", color: "white" }}>
                                Mack an appointment Today. </Typography>
                            <Typography variant="h6" sx={{ my: 4 }} style={{ color: "white", fontWeight: "200" }}>
                                *Please note: we do not accept bookings for children’s appointments online.
                                Please call the salon at +0123456789 to book an appointment for your child.
                            </Typography>
                            <Button style={{ backgroundColor: "#33FFF9", padding: "6px", borderRadius: "4px" }}>
                                <Link to="/appointment">
                                    Book Appointment
                                </Link>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;