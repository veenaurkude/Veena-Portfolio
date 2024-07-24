
import React from "react";
import { skills } from "../data";
import { CpuChipIcon } from "@heroicons/react/24/solid";

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-800">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <CpuChipIcon className="w-10 mx-auto mb-4 text-gray-400" />
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4 text-white">
            My Skills & Tools
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            I have extensive experience working with a variety of technologies as a developer. I've developed and maintained multiple projects using these technologies, and I'm always eager to learn more.
          </p>
        </div>
        <div className="px-20 md:px-12 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skillObj, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg py-6 px-6 flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={skillObj.image}
                alt={skillObj.skill}
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
              />
              <h3 className="title-font font-medium text-white text-sm sm:text-base">
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
