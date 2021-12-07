import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Appointments = ({ date }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `https://agile-plains-37007.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        // const url = `https://agile-plains-37007.herokuapp.com/appointments?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
            })
    }, [user.email, date]);

    return (
        <div>
            <h1>Appointments : {appointments.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell>Service Name </TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment.serviceName}
                                </TableCell>
                                <TableCell >{appointment.time}</TableCell>
                                <TableCell >{appointment.date}</TableCell>

                                <TableCell >{appointment.payment ? <span className="text-success">Paid</span> :
                                    <Link to={`/dashboard/payment/${appointment._id}`}><button className="btn btn-info">Pay</button></Link>
                                }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;