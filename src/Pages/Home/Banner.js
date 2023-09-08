import React from "react";
import chair from "../../assets/images/download.jpeg";
import MainButton from "../Shared/MainButton";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div    className="hero min-h-screen ">
      <div    className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}class="max-w-lg rounded-lg shadow-2xl"
        />
        <div    className="px-2">
          <h1    className="text-5xl font-bold">You can create a new task</h1>
          <p    className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
        <MainButton> <Link to={'/task'}>Get Started</Link></MainButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
