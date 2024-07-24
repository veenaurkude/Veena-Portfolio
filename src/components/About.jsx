

import React from "react";
import Typewriter from "typewriter-effect";
import women from "../assets/women.png";

const About = () => {
  return (
    <section id="about" className="bg-black text-white pt-32 pb-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5 md:px-10">
        <div className="w-full md:w-1/2 lg:flex-grow flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi,
            <br />
            I'm Veena.
          </h1>

          <div className="text-2xl">
            <Typewriter
              options={{
                strings: [
                  "Front-End Developer",
                  "React JS Developer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                cursor: "|",
              }}
            />
          </div>
          <br />
          <p className="mb-8 leading-relaxed text-justify px-4 md:px-0">
            I love to build amazing websites. Highly motivated and
            detail-oriented Frontend Developer. Skilled in HTML, CSS, JavaScript
            and ReactJs, with experience in creating responsive and
            user-friendly websites. Eager to contribute my skills and knowledge to a
            challenging and dynamic organization.
          </p>
          <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row justify-center md:justify-start w-full gap-2">
            <a
              href="#projects"
              className="inline-flex w-full md:w-auto justify-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg "
            >
              See My Past Work
            </a>
            <a
              href="#contact"
              className="inline-flex w-full md:w-auto justify-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg  md:ml-4 w-full md:w-auto"
              // className="ml-0 md:ml-4 w-full md:w-auto inline-flex justify-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Work With Me
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:max-w-lg">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={women}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
