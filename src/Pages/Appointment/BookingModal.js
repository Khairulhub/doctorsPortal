import React from "react";

const BookingModal = ({treatment}) => {
  const {name, slots} = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">
            {name}
          </h3>
          <p class="py-4">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div class="modal-action">
            <label for="booking-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
