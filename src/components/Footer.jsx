import React from "react";
import Bitcoin from "../assets/Bitcoin.png";
import Mastercard from "../assets/Mastercard.png";
import Visa from "../assets/Visa.png";

const Footer = () => {
  return (
    <div className=" flex flex-col sm:flex-row mt-8 sm:mt-14 px-6  justify-between text-white ">
      <div className="flex flex-col space-y-4 ">
        <p className=" text-2xl sm:text-lg">Quick Links</p>
        <p className="hover:text-amber-600 text-base sm:text-lg">Home</p>
        <p className="hover:text-amber-600 text-base sm:text-lg">Product</p>
        <p className="hover:text-amber-600 text-base sm:text-lg">Features</p>
        <p className="hover:text-amber-600 text-base sm:text-lg">Contact</p>
      </div>
      <div className="flex flex-col mt-4 sm:mt-0 space-y-4 ">
        <p className=" text-2xl sm:text-lg">Resources Links</p>
        <p className="hover:text-amber-600 text-base sm:text-lg">
          Download Whitepapper
        </p>
        <p className="hover:text-amber-600 text-base sm:text-lg">
          Blockchain Explore
        </p>
        <p className="hover:text-amber-600 text-base sm:text-lg">Crypto API</p>
        <p className="hover:text-amber-600 text-base sm:text-lg">Interest</p>
      </div>
      <div className="mt-4 sm:mt-0">
        <p className="text-2xl sm:text-lg text-center">
          We accept following payment systems
        </p>
        <div className="flex  items-center mt-2 justify-center space-x-2 hover:cursor-pointer">
          <img src={Bitcoin} alt="/" />
          <img src={Mastercard} alt="/" />
          <img src={Visa} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
