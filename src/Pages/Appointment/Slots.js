import React from "react";
import MainButton from "../Shared/MainButton";

const Slots = ({ service }) => {
    const {name,slots} = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-2xl ">
      <div class="card-body">
        <h2 class="card-title text-primary text-center justify-center text-bold">{name}</h2>
        <p className="text-center">{
            slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-500">Not Available</span>
        }</p>
        <p className="text-center mb-6">{slots.length} {slots.length >1 ? 'spaces' : 'space'}</p>
        <MainButton>Book Appointment</MainButton>
      </div>
    </div>
  );
};

export default Slots;
