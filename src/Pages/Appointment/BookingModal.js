import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment,setTreatment,refetch }) => {
  console.log();
  const {_id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formateDate = format(date, 'pp');
  console.log(formateDate);

  


  const handelformSlot= event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    console.log(slot, name, phone, email);

    //backend send data for ready
    const booking = {
      treatmentId: _id,
      treatment: treatment.name,
      date: formateDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone:event.target.phone.value,
    }
    

    //backend send data for ready
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
      'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        toast(`Appointment is set, ${formateDate} at ${slot}`)
      }
      else{
        toast.error(`Allready have an appointment is on, ${data.booking?.date} at ${data.booking?.slot}`)
        
      }
      refetch();
      //to close the modal
      setTreatment(null)
      
    })
  }

  return (
    
   
    <div>
      <input type="checkbox" id="booking-modal"class="modal-toggle" />
      <div  className="modal modal-bottom sm:modal-middle">
        <div  className="modal-box">
          <label
          htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3  className="font-bold text-lg mb-6">{name}</h3>
  
          <form onSubmit={handelformSlot}  className="grid grid-cols-1 gap-3 justify-items-center mt-2">
            <input
              type="text"
              disabled
              placeholder={format(date, "PP")}
              className="input w-full max-w-lg "
            />
            <select name="slot"class="select w-full max-w-lg">
              {
                slots.map((slot,index) => <option key={index} value={slot}>{slot}</option>)
              }
              
            </select>
            <input
              type="text"
              name="name"
              disabled value={user?.displayName}
              className="input w-full max-w-lg"
            />
              <input
                type="text"
                name="email"
                disabled value={user?.email}
                className="input w-full max-w-xsw-full"
              />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input w-full max-w-xsw-full"
            />
            <input
              type="submit"
              value="Submit "
              className="btn btn-primary text-white uppercase  w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
