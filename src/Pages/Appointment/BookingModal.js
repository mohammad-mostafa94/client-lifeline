import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';


const style = {
    position: 'absolute',
    textAlign: "center",
    borderRadius: "20px",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BookingModal = ({ openBooking, handleCloseBooking, booking, date, setBookingSuccess }) => {

    const { user } = useAuth();
    const { name, time, price } = booking;
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleSubmit = e => {
        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        axios.post('https://agile-plains-37007.herokuapp.com/appointments', appointment)
            .then(data => {
                if (data.data.insertedId) {
                    setBookingSuccess(true);
                    handleCloseBooking();
                }
            });


        e.preventDefault();
    }
    return (
        <Modal
            open={openBooking}
            onClose={handleCloseBooking}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="filled-size-normal"
                        defaultValue={time}
                        variant="filled"
                    />

                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="filled-size-normal"
                        // placeholder={user.displayName}
                        name="patientName"
                        defaultValue={user.displayName}
                        onBlur={handleOnBlur}
                        variant="filled"
                    />

                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="filled-size-normal"
                        placeholder="Phone Number"
                        onBlur={handleOnBlur}
                        name="phone"
                        variant="filled"
                    />

                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="filled-size-normal"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        variant="filled"
                    />

                    <TextField
                        disabled
                        sx={{ width: '90%', mt: 1 }}
                        id="filled-size-normal"
                        defaultValue={date.toDateString()}
                        variant="filled"
                    />
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;