import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import MainButton from '../Shared/MainButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`,
        }} className='flex justify-center items-center'>
            <div className='flex-1 max-w-lg hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-primary text-xl font-bold'>Appointment</h3>
                <h1 className='text-4xl text-white'>Make an appointment Today</h1>
                <p className='text-white mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <MainButton>Get Started</MainButton>

            </div>
        </section>
    );
};

export default MakeAppointment;