import React from "react";

const InfoCard = ({img, cartTitle,text,bgClass}) => {
  return (
    <div class={`card lg:card-side bg-base-100 shadow-xl  px-2 ${bgClass}`}>
      <figure className="pl-2">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cartTitle}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
