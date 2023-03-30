import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";

const Foot = () => {
  return (
    <div className=" flex-col-reverse items-center sm:flex-row flex px-4 mt-6 text-white">
      <p className="text-center mb-2 sm:mb-0 sm:mr-auto ">
        © 2022 <span className="hidden sm:inline">CRAPPO.</span> All rights
        reserved.{" "}
      </p>
      <div className="flex justify-center items-center space-x-4 ">
        <AiOutlineFacebook size={35} />
        <AiOutlineYoutube size={35} />
        <AiOutlineGoogle size={35} />
        <AiOutlineTwitter size={35} />
      </div>
    </div>
  );
};

export default Foot;
