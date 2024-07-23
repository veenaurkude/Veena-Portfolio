import React from "react";
import { skills } from "../data";
import { CpuChipIcon } from "@heroicons/react/24/solid";

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-800 ">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4">
            My Skills & Tools
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I have extensive experience working with a variety of technologies as a developer. I've developed and maintained multiple projects using these technologies, and I'm always eager to learn more.
          </p>
        </div>
        <div className="px-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 ">
          {skills.map((skillObj, index) => (
            // <div key={index} className="bg-gray-700 rounded-lg py-4 px-0 flex flex-col items-center cursor-pointer hover:bg-gray-700">
            //   <img src={skillObj.image} alt={skillObj.skill} className="w-16 h-16 mb-4" />
            //   <h3 className="title-font font-medium">{skillObj.skill}</h3>
            // </div>

            <div
              key={index}
              className="bg-gray-700 rounded-lg py-4 px-0 flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={skillObj.image}
                alt={skillObj.skill}
                className="w-16 h-16 mb-4"
              />
              <h3 className="title-font font-medium text-white">
                {skillObj.skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
