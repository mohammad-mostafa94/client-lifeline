import React from 'react';
import chair from '../../images/chair.png';
import Calender from '../Shared/Calender/Calender';
const AppointmentHeader = ({ date, setDate }) => {

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-sm-12 col-md-5 ">
                        <Calender date={date} setDate={setDate}></Calender>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img className="w-100" src={chair} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentHeader;