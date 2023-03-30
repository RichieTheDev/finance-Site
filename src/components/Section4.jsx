import React from "react";
import Fade from "react-reveal/Fade";

const Section4 = () => {
  return (
    <div className=" bg-white pb-4 mb-4  mx-4 pt-4 mt-4 px-4 items-center  border-2 shadow-2xl rounded-2xl text-black text-xl ">
      <Fade>
        <div className="">
          <input
            type="text"
            placeholder="Enter your Hash Rate"
            className="border-b items-center ml-4 border-gray-400  w-fit sm:w-[41%] "
          />
          <select className=" w-fit ml-4 mt-3 sm:w-[20%]">
            <option>TH/s</option>
            <option>Dave</option>
            <option>Pumpernickel</option>
            <option>Reeses</option>
          </select>
          <button className="ml-4  rounded-lg text-white font-normal bg-blue-600 px-4 py-2 text-center items-center mt-3 ">
            Calculate
          </button>
        </div>
        <div>
          <p className="mt-8 ml-4 text-blue-600">ESTIMATED 24 HOUR REVENUE:</p>
        </div>
        <div>
          <p className="mt-8 ml-4 text-3xl font-semibold">
            0.055 130 59 ETH <span className="text-blue-500">($1275)</span>
          </p>
        </div>
        <div>
          <p className="ml-4 mt-5 text-sm font-semibold">
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Section4;
