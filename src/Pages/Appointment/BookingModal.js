import React from "react";
import { format } from "date-fns";
const BookingModal = ({ date, treatment, data }) => {
  const { name, slots } = treatment;

  // const handelformSlot= event => {
  //   event.preventDefault();
  //   const slot = event.target.slot.value;
  //   console.log(slot);
  // }
  return (
   
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg mb-6">{name}</h3>
  
          <from  class="grid grid-cols-1 gap-3 justify-items-center mt-2">
            <input
              type="text"
              name="date"
              disabled
              placeholder={format(date, "PP")}
              class="input w-full max-w-lg "
            />
            <select name="slot" class="select w-full max-w-lg">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
              
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="input w-full max-w-lg"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              class="input w-full max-w-xsw-full"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              class="input w-full max-w-xsw-full"
            />
            <input
              type="submit"
              value="Submit "
              class="btn btn-primary text-white uppercase  w-full"
            />
          </from>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
