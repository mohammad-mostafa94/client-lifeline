import React from 'react';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import Services from './Services/Services';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';


const HomePage = () => {
    return (
        <div>
            <Banner />
            <Services />
            <AppointmentBanner />
            <Doctors />

        </div>
    );
};

export default HomePage;