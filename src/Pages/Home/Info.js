import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";



const Info = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-2 px-12">
        <InfoCard cartTitle="Opening Hours" text="Lorem Ipsum is simply dummy text of the print"  bgClass="bg-gradient-to-r from-secondary to-primary " img={clock}></InfoCard>

        <InfoCard cartTitle="Visit our location" text="Brooklyn, NY 10036, United States" 
        bgClass="bg-accent"  img={marker}></InfoCard>

        <InfoCard cartTitle="Contact us now" text="+000 123 456789" bgClass="bg-gradient-to-r from-secondary to-primary "  img={phone}></InfoCard>
    </div>
  );
};

export default Info;
