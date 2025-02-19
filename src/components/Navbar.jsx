

import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // ArrowDownIcon
import VeenaLogo from "../assets/VLogo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="bg-gray-900 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
            <img src={VeenaLogo} alt="Veena" className="w-16 " />
          </a>
          <div className="md:hidden">
            <button onClick={toggleNav} className="text-white focus:outline-none">
              {isNavOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
            </button>
          </div>
        </div>
        <div className={`w-full ${isNavOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-between md:w-auto `}>
          <nav className="flex flex-col md:flex-row md:items-center md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700  items-center text-base justify-center w-full">
            <a href="#about" onClick={closeNav} className="mb-2 md:mb-0 md:mr-5 w-full text-center relative group">
              <span className="hover:text-white">About</span>
              <span className="block h-0.5 bg-white absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </a>
            <a href="#projects" onClick={closeNav} className="mb-2 md:mb-0 md:mr-5 w-full text-center relative group">
              <span className="hover:text-white">Projects</span>
              <span className="block h-0.5 bg-white absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </a>
            <a href="#skills" onClick={closeNav} className="mb-2 md:mb-0 md:mr-5 w-full text-center relative group">
              <span className="hover:text-white">Skills</span>
              <span className="block h-0.5 bg-white absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </a>
            <a href="#contact" onClick={closeNav} className="mb-2 md:mb-0 md:mr-5 w-full text-center relative group">
              <span className="hover:text-white">Contact</span>
              <span className="block h-0.5 bg-white absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </a>
          </nav>
          {/* <div className="w-full flex justify-center mt-4 md:mt-0 ">
            <a
              href="https://drive.google.com/file/d/1cTtyn_j9m9Ed2eUDlkjUFL59CRk2qRl6/view?usp=sharing" target='_blank'
              className="inline-flex text-center items-center bg-gray-700 hover:bg-sky-500/50 border-0 py-1 px-3 focus:outline-none rounded text-base hover:text-white w-full text-center md:w-auto md:ml-auto">
              DOWNLOAD RESUME
              <ArrowDownIcon className="w-4 h-4 ml-1" />
            </a>
          </div> */}

<div className="w-full flex justify-center mt-4 md:mt-0">
      <a
        href="https://drive.google.com/file/d/19pHv0dKSMLEubfELhRTnDp8ZGeTNwTbo/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gray-700 hover:bg-sky-500/50 border-0 py-1 px-3 focus:outline-none rounded text-base text-center hover:text-white w-full md:w-auto justify-center"
      >
        <span className="flex items-center">
          VIEW RESUME
          {/* <ArrowDownIcon className="w-4 h-4 ml-2" /> */}
        </span>
      </a>
    </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;


