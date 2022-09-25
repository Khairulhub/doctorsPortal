import React from "react";
import contact from "../../assets/images/appointment.png";
import MainButton from "../Shared/MainButton";
const Contact = () => {
  return (
    <div
      style={{
        background: `url(${contact})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      
      }}
      className="flex justify-center"
    >
      <div className=" my-16">
        <input
          type="email"
          placeholder="Email Address"
          class="input  w-full max-w-xs block my-2"
        />
        <input
          type="text"
          placeholder="Subject"
          class="input  w-full max-w-xs block my-2"
        />
        <textarea
          type="text"
          placeholder="Your Message"
          class="input  w-full max-w-xs block my-2"
        />

       <div className="flex justify-center mt-5">
       <MainButton >submit</MainButton>
       </div>
      </div>
    </div>
  );
};

export default Contact;
