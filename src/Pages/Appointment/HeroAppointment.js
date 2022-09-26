import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";


const HeroAppointment = ({date,setDate}) => {
 
  return (
    <div class="hero min-h-screen "  style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={chair} alt="chair"
          class="max-w-lg rounded-lg shadow-2xl lg:ml-16"/>
        <div className="lg:mr-16">
        <DayPicker
          mode ="single"
          selected={date}
          onSelect={setDate}
        />
        <p>You selected {format(date, 'PP')}.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroAppointment;
