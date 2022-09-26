import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AvableServices from './AvableServices';
import HeroAppointment from './HeroAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <HeroAppointment date={date} setDate={setDate}></HeroAppointment>
            <AvableServices date={date}></AvableServices>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;