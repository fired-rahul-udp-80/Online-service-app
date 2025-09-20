import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import logo from "../assests/home/logo1.png";
import { NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const { navbar } = useContext(AppContext);

  // Slide down animation on mount
  const [animateNav, setAnimateNav] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimateNav(true), 100); // delay for smooth effect
  }, []);

  return (
    <div
      className={`max-w-[1360px] mx-auto text-white relative z-50 transition-all duration-700 ${
        animateNav ? "md:mt-6 opacity-100" : "-mt-10 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between backdrop-blur-3xl bg-lightBlueColor/30 h-[80px] px-5 rounded">
        {/* Logo + Menu */}
        <div className="flex justify-start gap-x-4 items-center">
          <HiMenuAlt2
            onClick={() => setIsMenu(true)}
            className="text-2xl cursor-pointer flex lg:hidden"
          />
          <div className="md:w-[15%] w-[20%] object-contain aspect-square">
            <img src={logo} alt="logo" loading="lazy" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 text-whiteColor font-semibold">
          {navbar.map((item, index) => (
            <NavLink key={index} className="hover:text-blue-400 transition">
              {item}
            </NavLink>
          ))}
        </div>

        {/* Contact Button (Always visible on right) */}
        <div>
          <button className="relative px-6 py-2 font-semibold text-white border-2 border-white rounded-lg overflow-hidden group">
            <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="relative z-10 text-sm">Contact</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenu ? "left-0" : "-left-[100%]"
          } lg:hidden fixed top-0 w-full h-screen bg-black/40 transition-all duration-300`}
        >
          <ul className="w-[60%] h-full backdrop-blur-xl bg-lightBlueColor/30 flex flex-col gap-10 px-5 pt-20 text-whiteColor font-semibold relative">
            <IoClose
              onClick={() => setIsMenu(false)}
              className="text-3xl font-bold cursor-pointer absolute right-4 top-4"
            />
            {navbar.map((item, index) => (
              <li
                key={index}
                onClick={() => setIsMenu(false)}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                <NavLink>{item}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
