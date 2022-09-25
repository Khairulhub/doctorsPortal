import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import cavity from '../../assets/images/cavity.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id:1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            img: fluoride
        },
        {
            _id:2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            img: cavity
        },
        {
            _id:3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
           <div className='text-center mb-5'>
           <h3 className='text-primary text-xl uppercase font-bold'>Our Services</h3>
            <h2 className='text-4xl'>Services We Provide</h2>
           </div>

           <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-20">
            {
                services.map(service => <Service
                    service={service} key={service._id}>  
                </Service>)
            }
           </div>
        </div>
    );
};

export default Services;