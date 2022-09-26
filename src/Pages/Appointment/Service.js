import React from "react";

const Service = ({service}) => {
    const {name} = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-2xl ">
      <div class="card-body">
        <h2 class="card-title text-primary text-center justify-center text-bold">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Service;
