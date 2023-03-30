import React from "react";
import Icon from "../assets/Icon.png";
import Person from "../assets/Person.png";
import World from "../assets/world.png";
import Typed from "react-typed";
import Slide from "react-reveal/Slide";

const Section1 = () => {
  return (
    <div className="text-white px-4 flex flex-col lg:flex-row justify-between items-center text-center space-y-6 lg:space-y-0 sm:text-start pt-8">
      <div className="flex flex-col sm:flex-row items-center ">
        <img className=" w-14 h-14" src={Icon} alt="/" />
        <Slide top>
          <p className="text-gray-100  md:text-2xl text-3xl">
            <Typed
              strings={["$30B", "$40B", "$60B", "$80B"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            <span className=" block sm:inline text-base sm:text-lg  text-gray-500">
              Digital Currency Exchange
            </span>
          </p>
        </Slide>
      </div>

      <div className="flex flex-col sm:flex-row items-center ">
        <img className=" w-14 h-14" src={Person} alt="/" />
        <Slide bottom>
          <p className="text-gray-100 md:text-2xl text-3xl">
            <Typed
              strings={["150", "160", "180", "190"]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
            <span className="block sm:inline text-base sm:text-lg  text-gray-500">
              Countries Around The World
            </span>
          </p>
        </Slide>
      </div>

      <div className="flex flex-col sm:flex-row items-center md:justify-between">
        <img className="w-14 h-14" src={World} alt="/" />
        <Slide top>
          <p className="text-gray-100 md:text-2xl text-3xl ">
            <Typed
              strings={["$10M", "50M", "100M", "150M"]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
            <span className="block sm:inline text-base sm:text-lg  text-gray-500">
              Trusted Wallet Investors
            </span>
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default Section1;
