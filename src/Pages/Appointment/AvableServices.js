import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";



import Service from "./Service";
import Slots from "./Slots";


const AvableServices = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
  return (
    <div className="px-12 mb-16">
      <div className="text-center mt-10">
        <h1 className="text-4xl text-primary font-bold ">
          Available Services on {format(date, 'PP')}
        </h1>
        <h3 className="text-2xl mb-10 ">Please select a service.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {
            services.map(service => <Service key={service._id} service={service}></Service>)
        }
      </div>



      <div className="text-center my-16">
        
        <h3 className="text-4xl text-primary font-bold  ">Available slots for Teeth Orthodontics.</h3>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-28">
        {
            services.map(service => <Slots key={service._id} service={service}  setTreatment={setTreatment}></Slots>)
        }
      </div>
      {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
    </div>
  );
};

export default AvableServices;
