import React from "react";

const Slots = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-2xl ">
      <div class="card-body">
        <h2 class="card-title text-primary text-center justify-center text-bold">
          {name}
        </h2>
        <p className="text-center">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Not Available</span>
          )}
        </p>
        <p className="text-center mb-6">
          {slots.length} {slots.length > 1 ? "spaces" : "space"}
        </p>
        {/* <MainButton for="booking-modal" class="btn modal-button"  onClick={()=> setTreatment(service)} >Book Appointment</MainButton> */}
        {/* <label for="booking-modal" class="btn modal-button">open modal</label> */}
        <div className="card-action justify-center text-center">
          <label
            for="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-primary text-white uppercase"
          >
            Booking Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Slots;
