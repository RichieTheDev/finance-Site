import React from "react";
import Chart from "../assets/Chart.png";
import Base from "../assets/Base.png";
import Table from "../assets/Table.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const Section5 = () => {
  return (
    <div className="pt-8 px-4 text-white">
      <div className="text-center text-2xl font-semibold sm:text-3xl">
        <p>Market Sentiments, Portfolio, And Run The</p>
        <p>Infrastructure Of Your Choice</p>
      </div>
      <div className="flex flex-col mx-4 sm:flex-row justify-between mt-4  ">
        <div>
          <Fade left>
            <h1 className="text-2xl mb-5  font-semibold">Invest Smart</h1>
            <p className="text-sm   text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur rem ducimus vitae maiores dolorum alias.
            </p>
            <button className="pt-1 rounded-lg mb-4  bg-blue-500 px-4 py-2 mt-5">
              learn more
            </button>
          </Fade>
        </div>
        <div>
          <Fade right>
            <img className="w-fit object-scale-dowm" src={Chart} alt="/" />
          </Fade>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between mt-5 sm:mt-10  ">
        <div>
          <Fade left>
            <img className="w-fit object-scale-down" src={Base} alt="/" />
          </Fade>
        </div>
        <div>
          <Slide left>
            <h1 className="text-2xl mb-5 font-semibold mt-8 sm:mt-24">
              Detailed Statistics
            </h1>
            <p className="text-sm sm:text-xs text-gray-400 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur rem ducimus vitae maiores dolorum alias.
            </p>
            <button className="pt-1 rounded-lg  bg-blue-500 px-4 py-2 mb-4 mt-5 ">
              learn more
            </button>
          </Slide>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-8 sm:mt-24  ">
        <div>
          <Fade left>
            <h1 className="text-2xl font-semibold mt-1  sm:mt-16">
              Grow Your Profit And Track Your
            </h1>
            <h1 className="text-2xl mb-2 sm:mb-5 font-semibold">Investments</h1>
            <p className="text-sm sm:text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur rem ducimus vitae maiores dolorum alias.
            </p>
            <button className="pt-1 rounded-lg  bg-blue-500 px-4 mb-3 py-2 mt-2 sm:mt-5">
              learn more
            </button>
          </Fade>
        </div>
        <div>
          <Fade right>
            <img className="w-fit object-scale-down " src={Table} alt="/" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Section5;
