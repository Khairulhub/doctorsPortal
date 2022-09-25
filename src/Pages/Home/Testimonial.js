import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review:"California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            review:"California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            review:"California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        }
    ]
  return (
    <section className="my-16">
      <div className="flex justify-between"> 
        <div>
        <h3 className="text-primary text-xl font-bold">Testimonial</h3>
        <h1 className="text-4xl ">What Our Patients Says</h1>
        </div>
        <div>
            <img src={quote} className="lg:w-48 w-14 lg:h-36 h-10"  alt="" />
        </div>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-10">
        {reviews.map(review => <Review
        key={review._id} review={review}></Review>)}
      </div>
    </section>
  );
};

export default Testimonial;
