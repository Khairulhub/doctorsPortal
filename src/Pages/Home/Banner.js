import React from "react";
import chair from "../../assets/images/chair.png";
import MainButton from "../Shared/MainButton";
const Banner = () => {
  return (
    <div    className="hero min-h-screen ">
      <div    className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}class="max-w-lg rounded-lg shadow-2xl"
        />
        <div    className="px-2">
          <h1    className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p    className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
         <MainButton>Get Started</MainButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
