import React from 'react';
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-4">
        <h2 className="text-slate-400 my-20 text-center text-4xl font-semibold">Experience</h2> 
      </div>
      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center"> {/* Corrected typo here */}
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-red-600 font-semibold">{experience.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="text-neutral-350 mb-2 font-semibold">
              {experience.role} -{" "}
              <span className="text-sm text-neutral-200">
                {experience.company}
              </span>
            </h6>
            <p className="mb-4 text-neutral-450">{experience.description}</p>
            {experience.technologies.map((tech, index) => (
              <span key={index} className="mr-2 mt-4 rounded bg-red-500 px-2 py-1 text-sm font-medium text-white-800" >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
