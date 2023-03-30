import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex sm:px-6 items-center p-5 bg-[#0D0D2B] text-white ">
      <img className="cursor-pointer w-fit" src={Logo} alt="/" />
      <div className="text-lg hidden md:flex space-x-4 justify-end ml-auto items-center">
        <p className="hover:cursor-pointer hover:text-amber-600 ">Product</p>
        <p className="hover:cursor-pointer hover:text-amber-600 ">Features</p>
        <p className="hover:cursor-pointer hover:text-amber-600 ">About</p>
        <p className="hover:cursor-pointer hover:text-amber-600 ">Contact</p>
      </div>
      <div className="text-lg hidden md:flex justify-end items-center space-x-4 ml-auto">
        <p className="hover:cursor-pointer hover:text-amber-600 ">Login</p>

        <p className="hover:cursor-pointer hover:text-amber-600 ">|</p>
        <button className=" rounded-lg bg-blue-700 px-4 py-2 hover:bg-blue-500">
          Register
        </button>
      </div>

      <div onClick={handleClick} className="block ml-auto md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        <div
          className={
            !nav
              ? "fixed top-0 left-0 bg-[#0D0D2B] z-10 text-white w-full h-screen items-center text-center ease-in-out duration-300 "
              : "fixed -left-60"
          }
        >
          <AiOutlineClose
            className="m-5 left-0"
            size={30}
            onClick={handleClick}
          />
          <ul>
            <li className="hover:text-amber-600 py-4 text-xl mt-8">Product</li>
            <li className="hover:text-amber-600 py-4 text-xl">Features</li>
            <li className="hover:text-amber-600 py-4 text-xl">About</li>
            <li className="hover:text-amber-600 py-4 text-xl">Contact</li>
            <li className="hover:text-amber-600 py-4 text-xl">Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
