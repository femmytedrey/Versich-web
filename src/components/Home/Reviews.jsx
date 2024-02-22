import React from "react";
import Testimony from "./Testimony";
import testifiers from "../../assets/Testifiers";

const Reviews = () => {
  return (
    <div className="my-16 mx-0 md:mx-16 lg:mx-28 text-center">
      <p className="text-4xl font-bold text-versich-darktext-color">Reviews</p>
      <div>
        <Testimony testifiers={testifiers} />
      </div>
    </div>
  );
};

export default Reviews;
