import React from 'react';
// import Header from '../Shared/Header/Header';
import AppointmentHeader from './AppointmentHeader';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div className="text-center">
            <h1 className="my-4">Appointment</h1>
            <AppointmentHeader date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
        </div>
    );
};

export default Appointment;