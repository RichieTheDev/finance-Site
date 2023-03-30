import React from "react";
import Illustration from "../assets/Illustration.jpg";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col  px-4 h-fit text-white ">
      <div className="">
        <div className="flex justify-between items-center  rounded-full ml-0 sm:ml-8 mt-6 sm:mt-14 text-sm sm:text-base py-2 px-1 lg:py-2 lg:px-4 text-white bg-gray-600 w-fit ">
          <p className="rounded-2xl text-xs sm:text-sm lg:py-2 lg:px-4 py-1 px-4 lg:ml-0 sm:ml-2 items-center bg-white text-gray-600">
            70% SAVE
          </p>
          <p className="sm:ml-4 ml-2 mr-1 sm:mr-4">
            for the best black friday deals
          </p>
        </div>
        <div className="md:ml-8 mt-4 md:mt-8">
          <Fade left>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Fastest & Secure
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Platform To Invest In
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Crypto
            </h1>
            <p className="text-base sm:text-lg mt-1">
              buy and sell cyptocurrencies by trusted 10M wallets, in over 100m
              transactions
            </p>
            <button
              className="bg-blue-700 px-4 py-2 mt-6 rounded-lg items-center text-lg "
              type="submit"
            >
              Try for FREE{" "}
            </button>
          </Fade>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  justify-center mx-auto">
        <Fade right>
          <img
            className="w-fit sm:w-[70%]   h-fit object-scale-down"
            src={Illustration}
            alt="/"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
