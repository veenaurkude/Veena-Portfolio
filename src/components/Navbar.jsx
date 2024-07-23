import React from 'react'
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import VeenaLogo from "../assets/VLogo.png";

const Navbar = () => {
  return (
    <header className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
          <img src={VeenaLogo} alt="Veena" className='w-16'/>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 relative group">
            <span className="hover:text-white">About</span>
            <span className="block h-0.5 bg-white absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          </a>
          <a href="#projects" className="mr-5 relative group">
            <span className="hover:text-white">Projects</span>
            <span className="block h-0.5 bg-white absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          </a>
          <a href="#skills" className="mr-5 relative group">
            <span className="hover:text-white">Skills</span>
            <span className="block h-0.5 bg-white absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          </a>
          <a href="#contact" className="mr-5 relative group">
            <span className="hover:text-white">Contact</span>
            <span className="block h-0.5 bg-white absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          </a>
        </nav>
        <a
          href="https://drive.google.com/file/d/1cTtyn_j9m9Ed2eUDlkjUFL59CRk2qRl6/view?usp=sharing" target='_blank'
          className="inline-flex items-center bg-gray-700 hover:bg-sky-500/50 border-0 py-1 px-3 focus:outline-none rounded text-base hover:text-white mt-4 md:mt-0">
          DOWNLOAD RESUME
          <ArrowDownIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  )
}

export default Navbar