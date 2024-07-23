import React from "react";
import Typewriter from "typewriter-effect";
import women from "../assets/women.png";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-4 pb-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 px-20 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi,
            <br />
            I'm Veena.
            {/* <br className="hidden lg:inline-block" />I love to build amazing
            websites. */}
          </h1>

          <div className="text-white text-2xl">
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
          <p className="mb-8 leading-relaxed text-justify">
            I love to build amazing websites. Highly motivated and
            detail-oriented Frontend Developer. Skilled in HTML, CSS, JavaScript
            and ReactJs, with experience in creating responsive and
            user-friendly websites. Eager to contribute my skills and knowledge to a
            challenging and dynamic organization.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Work With Me
              
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
