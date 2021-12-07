import { Button, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import BookingModal from './BookingModal';

const EveryAppointment = ({ booking, date, setBookingSuccess }) => {
    const { name, space, time, price } = booking;

    const [openBooking, setOpenBooking] = useState(false)
    const handleOpenBooking = () => setOpenBooking(true);
    const handleCloseBooking = () => setOpenBooking(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }} >
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" component="h2" sx={{ py: 3 }}>
                        {time}
                    </Typography>
                    <Typography variant="body1" component="h2" >
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Typography variant="body1" component="h2" >
                        Price ${price}
                    </Typography>
                    <Button onClick={handleOpenBooking} sx={{ my: 3 }} variant="contained">Book Appointment</Button>
                </Paper>

            </Grid>
            <BookingModal
                booking={booking}
                date={date}
                openBooking={openBooking}
                handleCloseBooking={handleCloseBooking}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>

    );
};

export default EveryAppointment;