import React from "react";
import Choose from "../assets/Choose.png";

const Section2 = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 px-4  text-white">
      <div>
        <img
          className="w-fit sm:w-[95%] object-scale-down sm:ml-8 "
          src={Choose}
          alt="/"
        />
      </div>
      <div className=" mt-20 ml-8 mr-8">
        <h1 className="text-5xl">why you should choose</h1>
        <h1 className="text-5xl">CHAPPO</h1>
        <p className="text-xl sm:text-base text-gray-400 mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          rerum eaque impedit quaerat, voluptates aliquam sed rem hic pariatur!
        </p>
        <button className="pt-1 rounded-lg mr-10 bg-blue-500 items-center py-2 px-4 mt-5 text-xl mb-3">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Section2;
